# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ariffforai/houseplant-out-of-office/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/ariffforai/houseplant-out-of-office/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

Entry for [The Houseplant Out-of-Office](https://make.fun/c/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) on make.fun: the funniest out-of-office auto-reply a houseplant would send, in 120 characters or fewer.

## The line

> Out of office. You didn't water me for months, so I'm returning the favour: your email stays unread.

100 characters, one line. The plant has been ignored for months — now it returns the favour, and the owner's email joins the queue behind the sunlight.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the single line to `/output/entry.txt`, with gate pre-checks (1–120 characters, not only whitespace, single line, no trailing newline) and read-back verification (byte-for-byte equality, re-checks the char count).

```sh
node main.ts
# verified: read-back matches, 100 characters, single line, no trailing newline
# wrote 100 characters (100 bytes) to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
