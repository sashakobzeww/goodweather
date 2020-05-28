export const fomatInput = (value, variant) => {

  var result;

  if (variant == "years") {

    return value.replace(/\D/, '');
  }
  return result;
}

export const numberFormat = (n, c, d, t) => {
  c = isNaN((c = Math.abs(c))) ? 0 : c;
  d = d == undefined ? "." : d;
  t = t == undefined ? " " : t;
  var s = n < 0 ? "-" : "",
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};

export const priceFormat = price =>
  numberFormat(price, 0, "", " ") + " ₽";

export const declension = (num, words) => {
  let poses = [2, 0, 1, 1, 1, 2];
  return words[
    num % 100 > 4 && num % 100 < 20 ? 2 : poses[num % 10 < 5 ? num % 10 : 5]
  ];
};

