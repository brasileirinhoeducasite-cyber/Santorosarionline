//----- construcao da lista principal ---//
function rosarioInteiro() {
  apagarTela();
  var ordem = lista.slice();
  for (let i in gozosos) {
    ordem.push(gozosos[i]);
    ordem = ordem.concat(combo);
  }
  for (let i in dolorosos) {
    ordem.push(dolorosos[i]);
    ordem = ordem.concat(combo);
  }
  for (let i in gloriosos) {
    ordem.push(gloriosos[i]);
    ordem = ordem.concat(combo);
  }
  ordem.push(SalveRainha);
  executar(ordem);
}

//-----funções dos mistérios ----//
function misteriosgozosos() {
  apagarTela();
  var ordem = lista.slice();
  for (let i in gozosos) {
    ordem.push(gozosos[i]);
    ordem = ordem.concat(combo);
  }
  ordem.push(SalveRainha);
  executar(ordem);
}

function misteriosdolorosos() {
  apagarTela();
  var ordem = lista.slice();
  for (let i in dolorosos) {
    ordem.push(dolorosos[i]);
    ordem = ordem.concat(combo);
  }
  ordem.push(SalveRainha);
  executar(ordem);
}

function misteriosgloriosos() {
  apagarTela();
  var ordem = lista.slice();
  for (let i in gloriosos) {
    ordem.push(gloriosos[i]);
    ordem = ordem.concat(combo);
  }
  ordem.push(SalveRainha);
  executar(ordem);
}

function misteriosluminosos() {
  apagarTela();
  var ordem = lista.slice();
  for (let i in luminosos) {
    ordem.push(luminosos[i]);
    ordem = ordem.concat(combo);
  }
  ordem.push(SalveRainha);
  executar(ordem);
}
