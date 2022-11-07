function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

let sorular = [
  new Soru(
    "HTML'in tam olarak açılımı nedir?",
    {
      A: "Home Tool Markup Language",
      B: "Hyperlinks and Text Markup Language",
      C: "Hyper Text Markup Language",
      D: "Hiper Tool Markup Lounge",
    },
    "C"
  ),
  new Soru(
    "CSS açılımı hangisinde doğru olarak verilmiştir?",
    {
      A: "Cascading Style Sheets",
      B: "Custom Style Sheets",
      C: "Computer Style Sheets",
      D: "Colorful Style Sheets",
    },
    "A"
  ),
  new Soru(
    "Bootstrap hangisinin kodlama sürecini hızlandırmak için ortaya çıkmıştır?",
    { A: "HTML", B: "CSS", C: "JavaScript", D: "SASS" },
    "B"
  ),
  new Soru(
    "Javascript'in alternatif adı nedir?",
    { A: "LimeScript", B: "JXXScript", C: "ECMScript", D: "ECMAScript" },
    "D"
  ),
  new Soru(
    "Kullanıcı bir HTML öğesini tıkladığında aşağıdaki event (olaylardan) hangisi gerçekleşir?",
    { A: "onclick", B: "onmouseclick", C: "onmouseover", D: "elementclick" },
    "A"
  ),
];
