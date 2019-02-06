function hoverOver(exOut, textId, bubbleId) {
  var ex = document.getElementById(exOut);
  var ev = document.getElementById(textId);

  ev.onclick = function() {
    document.getElementById(bubbleId).style.display = 'block';
  }
  ex.onclick = function() {
    document.getElementById(bubbleId).style.display = 'none';
  }
}

hoverOver('exOutRev', 'bubbleRevText', 'popupRevBubble');
hoverOver('exOutOrder', 'bubbleOrderText', 'popupOrderBubble');
hoverOver('exOutCust', 'bubbleCustText', 'popupCustBubble');
hoverOver('exOutAvg', 'bubbleAvgText', 'popupAvgBubble');


var cleave = new Cleave('#revenueInput', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

new Cleave('#orderInput', {
    numeral: true,
    numeralDecimalScale: 0
});

new Cleave('#customerInput', {
    numeral: true,
    numeralDecimalScale: 0
});

new Cleave('#lifespanInput', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});


function doMath() {

  let revenue = document.getElementById('revenueInput').value;
  let revenueFloat = parseFloat(revenue.replace(/,/g , ''));

  let order = document.getElementById('orderInput').value;
  let orderFloat = parseFloat(order.replace(/,/g , ''));


  let customer = document.getElementById('customerInput').value;
  let customerFloat = parseFloat(customer.replace(/,/g , ''));


  let lifespan = document.getElementById('lifespanInput').value;
  let lifespanFloat = parseFloat(lifespan.replace(/,/g , ''));


  let avgPurchaseValue = revenueFloat / orderFloat;
  let avgPurchaseFreq = orderFloat / customerFloat;
  let customerValue = avgPurchaseValue / avgPurchaseFreq;
  let sum = customerValue * lifespanFloat;

  document.getElementById('answer').textContent = "$" + sum.toFixed(2);



}
