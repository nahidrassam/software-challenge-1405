## باگ ۱ — [نمایش modal ابتدای لود شدن سایت]

- کجا: [./bug-hunt/public/style.css] خط 116 و 126
- مشکل: [class: modal-hidden کار نمیکرد]
- ریشه: [از آنجایی که modal دارای display:flex است،display:none را نمیپذیرد]
- fix: [اضافه کردن !important به diplay:none]
