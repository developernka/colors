var h = window.innerHeight;
var n = 3;
var colorSorted = {};
var htm = '';
colors.shades.forEach(color => {
  colorSorted[color.shadeCode] = color;
  //   console.log(color.shadeCode);
  //   htm += `<div style='background:rgb(${color.shadeR},${color.shadeG},${color.shadeB});'><span>${color.shadeCode}</span><span>${color.shadeName}</span><span>(${color.shadeR},${color.shadeG},${color.shadeB})</span></div>`;
});

for (var k in colorSorted) {
  var color = colorSorted[k];
  htm += `<tr style='background:rgb(${color.shadeR},${color.shadeG},${color.shadeB});'><td>${color.shadeCode}</td><td>${color.shadeName}</td><td>(${color.shadeR},${color.shadeG},${color.shadeB})</td></tr>`;
}

$('#list>table').html(htm);

$('tr').click(function() {
  //$('body').attr('style', $(this).attr('style'));
  $('#view>table').append(`
  <tr class="color" style="${$(this).attr(
    'style'
  )}height:${h / n - 2}px;">${$(this).html()}</tr>
  `);
  $('.color').click(function() {
    $(this).remove();
  });
});

$('#list,#view').css({ height: h + 'px' });
