// let lines = '5 5000000\n3 123456\n9 23454324543423\n9 99999999991999999\n7 777\n0 0\n'.split('\n');
// let lines = '5 42752585055565555427223805555881585\n0 0\n'.split('\n');
// let lines = '2 77314742728684103377022523\n3 83546527400223563532133331021132033215340630333522323033\n3 65242333544353047383277172632372733300368112236334\n3 335386473336532363333626077723607233236633233333313\n5 42752585055565555427223805555881585\n5 45464723554505521863553216550552055355555587832875750545171537525126205036856125554645111311565\n6 5025061766687035540466526210747141862577086887638640066566836346623657246871224366\n9 892922022700286633926601923\n1 3100510510151838056110311081213067141561711116516271315530515738368458041101318474561671077\n4 4444358427014\n3 360638083535631\n5 845865375457157584654688254558636515578850448256072325525\n1 835101278485654111381621161264202511657101256218331050112541037511586\n6 563666463646262254410550873637026375687032641\n8 5568682374551855832282658835885818807018765882381781218808188058188788751808888108\n7 7677573287734722347575354767717676576074678768707475530777173077511552\n2 2121042674622582220287\n9 86417299633672977991270855617064801692843531069221096909750938\n9 509953779943911098394958702974999612039979446880648625899799282413447\n0 0\n'.split('\n');
let lines = '1 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120\n1 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919\n9 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999919\n1 10000800001\n9 91919\n7 1278717\n5 50\n4 4004\n2 22\n6 22\n0 0\n'.split('\n');

for(let i = 0; i < lines.length - 2; i++) {
    const nProblema = +lines[i].split(' ')[0];
    const regexp = new RegExp(`${nProblema}+`, 'g');
    const numeroImpresso = lines[i].split(' ')[1];
    console.log(numeroImpresso.replace(regexp, '').replace(/^0+/g, '') || 0);
}
