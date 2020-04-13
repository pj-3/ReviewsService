import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 100,
    duration: '5m',
    thresholds: {
        'http_req_duration': ['p(90) < 500']
    }
}

const randomNum = () => {return Math.ceil(Math.random() * 10000000)};

export default function () {
    let res = http.get(`http://localhost:2500/listings/${randomNum()}/reviews`);

    check(res, {
        'is status 200': r => r.status === 200,
        'transaction time OK': r => r.timings.duration < 500
    });

    sleep(0.1);
}