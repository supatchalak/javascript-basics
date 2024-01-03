const months = ["March", "Jan", "Feb", "Dec"];

function ss(arr) {
  let result = [...arr];
  return result.sort();
}
// console.log(ss(months));
// console.log(months); //ถ้ามีการ pass  by ref ตะทำให้การเรียก function ก่อนหน้ามีผลในการ log ดู value ด้วย

let d = { status: true };
console.log(typeof d);
console.log(d);
let s = JSON.stringify(d);
console.log(typeof s);
console.log(s);

let dd = JSON.parse(s);
console.log(typeof dd);
console.log(dd);

// let str = '{"status":true}';
// let str = `{"status":true}`;
// console.log(JSON.parse(str));

let str = "{\"status\":'A'}";
let str2 = "{\"status\":'A'}";
