import React, { useState, useEffect } from 'react';
import './css/catalogo.css';
import logo from '../assets/images/eurocolorpng.png'; 
import images from '../assets/images/index.js';
import { useLocation } from 'react-router-dom';


const products = [
  {
    name: 'Amarillo',
    series: 'CE4501',
    image: images['pigmento1.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Naranja',
    series: 'CE3001',
    image: images['pigmento2.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Azul Turquesa',
    series: 'CE5527',
    image: images['pigmento3.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Marrón Oscuro',
    series: 'CE8955',
    image: images['pigmento4.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Café Rojizo',
    series: 'CE8853',
    image: images['pigmento5.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Negro de Niquel ',
    series: 'CE5208',
    image: images['pigmento6.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Rojo',
    series: 'CE6344',
    image: images['pigmento7.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Negro Cobalto',
    series: 'CE5229',
    image: images['pigmento8.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Jade',
    series: 'CE7030',
    image: images['pigmento9.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Azul Rey',
    series: 'CE5641',
    image: images['pigmento10.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Hoja',
    series: 'CE7122',
    image: images['pigmento11.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Lima',
    series: 'CE4627',
    image: images['pigmento12.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Rojo Intenso',
    series: 'CE6066',
    image: images['pigmento13.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Marrón Anaranjado',
    series: 'CE8871',
    image: images['pigmento14.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Rosa',
    series: 'CE6356',
    image: images['pigmento15.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Nacar',
    series: 'CE6440',
    image: images['pigmento16.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Naranja Amarillento',
    series: 'CE8725',
    image: images['pigmento17.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Cobalto',
    series: 'CE5711',
    image: images['pigmento18.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Amarillo Huevo',
    series: 'CE4544',
    image: images['pigmento19.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Cobalto',
    series: 'CE5602',
    image: images['pigmento20.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Blanco',
    series: 'CE0001',
    image: images['pigmento21.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Morado',
    series: 'CE6515',
    image: images['pigmento22.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Tangerina',
    series: 'CE3000',
    image: images['pigmento23.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Rojo',
    series: 'CE6070',
    image: images['pigmento24.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Gris',
    series: 'CE5159',
    image: images['pigmento25.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Menta',
    series: 'CE7301',
    image: images['pigmento26.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Marrón',
    series: 'CE6602',
    image: images['pigmento27.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Mayolico',
    series: 'CE7521',
    image: images['pigmento28.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Rojo Cereza',
    series: 'CE6540',
    image: images['pigmento29.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Lila',
    series: 'CE8515',
    image: images['pigmento30.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Verde Esmeralda',
    series: 'CE7260',
    image: images['pigmento31.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Amarillo Huevo',
    series: 'CE4563',
    image: images['pigmento32.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Café',
    series: 'CE8841',
    image: images['pigmento33.png'],
    category: 'Pigmentos'
  },
  {
    name: 'Marrón Anaranjado',
    series: 'CPDNA621',
    image: images['pasta1.png'],
    category: 'Colores para Pasta'
  },
  {
    name: 'Azul',
    series: 'CPAZ211',
    image: images['pasta2.png'],
    category: 'Colores para Pasta'
  },
  {
    name: 'Café',
    series: 'CPDM512',
    image: images['pasta3.png'],
    category: 'Colores para Pasta'
  },
  {
    name: 'Negro Grisáceo',
    series: 'CPDMA534',
    image: images['pasta4.png'],
    category: 'Colores para Pasta'
  },
  {
    name: 'Negro',
    series: 'CPDNE683',
    image: images['pasta5.png'],
    category: 'Colores para Pasta'
  },
  {
    name: 'Azul',
    series: 'EG600-70',
    image: images['granilla1.png'],
    category: 'Granilla'
  },
  {
    name: 'Negro',
    series: 'FA700-P1',
    image: images['granilla2.png'],
    category: 'Granilla'
  },
  {
    name: 'Amarillo',
    series: 'EG9002-70',
    image: images['granilla3.png'],
    category: 'Granilla'
  },
  {
    name: 'Café',
    series: 'EG200-76',
    image: images['granilla4.png'],
    category: 'Granilla'
  },
  {
    name: 'Esmalte Transparente',
    series: 'MX400P0L',
    image: images['esmalte1.png'],
    category: 'Esmaltes'
  },
  {
    name: 'Esmalte Transparente',
    series: 'MX4036070',
    image: images['esmalte2.png'],
    category: 'Esmaltes'
  },
  {
    name: 'Esmalte Blanco',
    series: 'ES174441',
    image: images['esmalte3.png'],
    category: 'Esmaltes'
  },
  {
    name: 'Esmalte Transparente Mate',
    series: 'EMT003',
    image: images['esmalte4.png'],
    category: 'Esmaltes'
  },
  {
    name: 'Feldespato',
    series: 'PO102',
    image: images['materia1.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Sílice',
    series: 'PO102',
    image: images['materia2.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Carbonato de Calcio',
    series: 'P0040',
    image: images['materia3.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Opacificante',
    series: 'PO103',
    image: images['materia4.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Alúmina',
    series: 'PO105',
    image: images['materia5.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Carbonato de Bario',
    series: 'PO116',
    image: images['materia6.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Oxido de Zinc',
    series: 'PO161',
    image: images['materia7.png'],
    category: 'Materias Primas'
  },
  {
    name: 'Separador de Color Talavera',
    series: 'Separador de color',
    image: images['aditivo1.png'],
    category: 'Aditivos'
  },
  {
    name: 'Suspensivante',
    series: 'Suspensivante',
    image: images['aditivo2.png'],
    category: 'Aditivos'
  },
  {
    name: 'Separador de Color Serigrafia',
    series: 'Separador de color serigrafia',
    image: images['aditivo3.png'],
    category: 'Aditivos'
  },
  {
    name: 'Goma para Granilla',
    series: 'Goma para granilla',
    image: images['aditivo4.png'],
    category: 'Aditivos'
  },
  {
    name: 'Goma',
    series: 'Goma',
    image: images['aditivo5.png'],
    category: 'Aditivos'
  },
  {
    name: 'Silicato de Sodio',
    series: 'Silicato de sodio',
    image: images['aditivo6.png'],
    category: 'Aditivos'
  },
  {
    name: 'Adherente',
    series: 'Adherente',
    image: images['aditivo7.png'],
    category: 'Aditivos'
  },
  {
    name: 'Herramienta para Modelado (L)',
    series: 'ETT03',
    image: images['herramienta1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (M)',
    series: 'ETT02',
    image: images['herramienta2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (S)',
    series: 'ETT01',
    image: images['herramienta3.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (L)',
    series: 'ETR03',
    image: images['herramienta4.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (M)',
    series: 'ETR02',
    image: images['herramienta5.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (S)',
    series: 'ETR01',
    image: images['herramienta6.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (M)',
    series: 'E0T10',
    image: images['herramienta7.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (S)',
    series: 'E0T09',
    image: images['herramienta8.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (M)',
    series: 'ELR05',
    image: images['herramienta9.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (S)',
    series: 'ELR04',
    image: images['herramienta10.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (L)',
    series: 'EGC10',
    image: images['herramienta11.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (M)',
    series: 'EGC9',
    image: images['herramienta12.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado (S)',
    series: 'EGC08',
    image: images['herramienta13.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'ESW402',
    image: images['herramienta14.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'EST10',
    image: images['herramienta15.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'EG12P',
    image: images['herramienta16.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'EST09',
    image: images['herramienta17.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set C Herramienta para Modelado',
    series: 'est3c',
    image: images['herramienta18.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set B Herramienta para Modelado',
    series: 'EST3C',
    image: images['herramienta19.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set A Herramienta para Modelado',
    series: 'EST3A',
    image: images['herramienta20.png'],
    category: 'Herramientas'
  },
  {
    name: 'Modelador de Boquillas (M)',
    series: 'EMB10351',
    image: images['herramienta21.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set para Modelado',
    series: 'ES9MC',
    image: images['herramienta22.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set para Modelado',
    series: 'ES4C',
    image: images['herramienta23.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'EST7P',
    image: images['herramienta24.png'],
    category: 'Herramientas'
  },
  {
    name: 'Herramienta para Modelado',
    series: 'EST131',
    image: images['herramienta25.png'],
    category: 'Herramientas'
  },
  {
    name: 'Kit para Modelado',
    series: 'EP10410',
    image: images['herramienta26.png'],
    category: 'Herramientas'
  },
  {
    name: 'Modelador de Boquillas (M)',
    series: 'ELB10352',
    image: images['herramienta27.png'],
    category: 'Herramientas'
  },
  {
    name: 'Acanalador',
    series: '',
    image: images['herramienta28.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set de Herramienta Coreana',
    series: 'EKC407',
    image: images['herramienta29.png'],
    category: 'Herramientas'
  },
  {
    name: 'Cortador de Arcilla',
    series: 'ES10096',
    image: images['herramienta30.png'],
    category: 'Herramientas'
  },
  {
    name: 'Cortador de Arcilla',
    series: 'ESB409',
    image: images['herramienta31.png'],
    category: 'Herramientas'
  },
  {
    name: 'Removedor de Arcilla',
    series: 'ER10179',
    image: images['herramienta32.png'],
    category: 'Herramientas'
  },
  {
    name: 'Kit Modelador de Arcilla Flexible(M)',
    series: 'EFM10487',
    image: images['modelador1.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Kit Modelador de Arcilla Firme(M)',
    series: 'EFM10488',
    image: images['modelador2.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Kit Modelador de Arcilla Flexible(S)',
    series: 'EFS10485',
    image: images['modelador3.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Kit Modelador de Arcilla Firme(S)',
    series: 'EFS10486',
    image: images['modelador4.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Set Herramienta para Esculpir',
    series: 'EW10438',
    image: images['esculpir1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Herramienta para Esculpir (L)',
    series: 'EW10439',
    image: images['esculpir2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Kit Botella Aplicador 1 oz',
    series: 'EB1OZ',
    image: images['aplicador1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Aplicador de Precisión 2 oz',
    series: 'EB2OZ',
    image: images['aplicador2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Aplicador de Precisión 4 oz',
    series: 'EB4OZ',
    image: images['aplicador3.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Aplicador 8 oz',
    series: 'EB8OZ',
    image: images['aplicador4.png'],
    category: 'Herramientas'
  },
  {
    name: 'Botella Aplicador 8 oz',
    series: 'EBK8OZ',
    image: images['aplicador5.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Aplicador de Precisión 36 pza',
    series: 'EBK10',
    image: images['aplicador6.png'],
    category: 'Herramientas'
  },
  {
    name: 'Conector para Botella Aplicador 4 y 8 oz',
    series: 'ECB4-8OZ',
    image: images['aplicador7.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Persilla de Precisión 1 oz',
    series: 'EPA1OZ',
    image: images['epa1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Set Persilla de Precisión 3 oz',
    series: 'EPA3OZ',
    image: images['epa2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Adaptador de Succión para Perilla',
    series: 'EPA124',
    image: images['epa3.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #21',
    series: 'EA21G',
    image: images['aguja1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #20',
    series: 'EA20G',
    image: images['aguja2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #19',
    series: 'EA19G',
    image: images['aguja3.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #18',
    series: 'EA18G',
    image: images['aguja4.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #17',
    series: 'EA17G',
    image: images['aguja5.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #16',
    series: 'EA16G',
    image: images['aguja6.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #15',
    series: 'EA15G',
    image: images['aguja7.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Acero #14',
    series: 'EA14G',
    image: images['aguja8.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Plástico #14',
    series: 'E14G',
    image: images['aguja9.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Plástico #20',
    series: 'E20G',
    image: images['aguja10.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Plástico #18',
    series: 'E18G',
    image: images['aguja11.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Plástico #16',
    series: 'E16G',
    image: images['aguja12.png'],
    category: 'Herramientas'
  },
  {
    name: 'Aguja Punta Redonda',
    series: 'EAT01',
    image: images['aguja13.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón',
    series: 'ERS10193',
    image: images['rib1.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón',
    series: 'ERS10195',
    image: images['rib2.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón',
    series: 'ERS10201',
    image: images['rib3.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón',
    series: 'ERS10203',
    image: images['rib4.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón#8',
    series: 'ESR10200',
    image: images['rib5.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Silicón#6',
    series: 'ESR10198',
    image: images['rib6.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero#7',
    series: 'ESR10199',
    image: images['rib7.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 1B',
    series: 'ER10270',
    image: images['rib8.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 2A',
    series: 'ER10272',
    image: images['rib9.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 2C',
    series: 'ER10274',
    image: images['rib10.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 4B',
    series: 'ES10279',
    image: images['rib11.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 3B',
    series: 'ER10276',
    image: images['rib12.png'],
    category: 'Herramientas'
  },
  {
    name: 'Rib de Acero 3C',
    series: 'ESR10277',
    image: images['rib13.png'],
    category: 'Herramientas'
  },
  {
    name: 'Ribs para Decorar set A',
    series: 'ERA10224',
    image: images['set1.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Ribs para Decorar set B',
    series: 'ERB10225',
    image: images['set2.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Ribs para Decorar set C',
    series: 'ERC10226',
    image: images['set3.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Set Sello de Letras (Mayúscula)',
    series: 'ESLL10297',
    image: images['sello1.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Set Sello de Letras (Minúscula)',
    series: 'ESLM10296',
    image: images['sello2.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Set Sello de Números',
    series: 'ESN10298',
    image: images['sello3.jpg'],
    category: 'Herramientas'
  },
  {
    name: 'Lápices Cerámicos',
    series: '',
    image: images['otro4.png'],
    category: 'Otros'
  },
  {
    name: 'Rafia Calibre #2',
    series: '',
    image: images['otro1.png'],
    category: 'Otros'
  },
  {
    name: 'Rafia Calibre #4',
    series: '',
    image: images['otro3.png'],
    category: 'Otros'
  },
  {
    name: 'Cordón para Molde de Prensa',
    series: 'EMT532',
    image: images['otro2.png'],
    category: 'Otros'
  },
  
];

const CatalogoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Nuevo estado para controlar el menú desplegable
  const [selectedCategory, setSelectedCategory] = useState('Pigmentos');
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const categorySynonyms = {
    'Pigmentos': ['pigmento', 'colorante'],
    'Colores para Pasta': ['colores', 'pasta', 'colorante pasta'],
    'Granilla': ['granillas', 'grano', 'partículas'],
    'Esmaltes': ['esmalte', 'barniz'],
    'Materias Primas': ['material', 'materia prima', 'materiales'],
    'Aditivos': ['aditivo', 'aditivos'],
    'Herramientas': ['herramienta', 'utensilios', 'instrumento'],
    'Otros': ['otro', 'diverso', 'varios']
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
    setIsDropdownOpen(false); // Cierra el dropdown al seleccionar una categoría
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

    let matchedCategory = Object.keys(categorySynonyms).find(category => {
      const lowerCaseCategory = category.toLowerCase();
      const synonyms = categorySynonyms[category].map(synonym => synonym.toLowerCase());

      return lowerCaseCategory.includes(lowerCaseSearchTerm) || synonyms.some(synonym => synonym.includes(lowerCaseSearchTerm));
    });

    if (matchedCategory) {
      setSelectedCategory(matchedCategory);
      setIsMenuOpen(false);
      setIsDropdownOpen(false); // Cierra el dropdown al realizar la búsqueda
    } else {
      setSelectedCategory('');
    }
  };


  const filteredProducts = products.filter(product => {
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();
    const lowerCaseName = product.name.toLowerCase();
    const isProductInCategory = product.category === selectedCategory;
    const isNameMatch = lowerCaseName.includes(lowerCaseSearchTerm);

    return (
      (selectedCategory && isProductInCategory) || 
      (!selectedCategory && isNameMatch)
    );
  });

  return (
    <div className="home">
      <header className="header"> 
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo Empresa" className="logo-empresa-login" />
          </div>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar-item"><a href="/">INICIO</a></li>
            <li className="navbar-item"><a href="/Nosotros">¿QUIÉNES SOMOS?</a></li>
            <li className="navbar-item"><a href="/ubicacion">UBICA TU TIENDA</a></li>
          </ul>
          <form className="navbar-search" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Buscar categoría o producto..." 
              value={searchTerm}
              onChange={handleSearchChange} 
            />
            <button type="submit">🔍</button>
          </form>
          <div className="menu-icon" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </header>

      <div className="catalogo-contenido">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span>{selectedCategory || 'Seleccione una categoría'}</span>
          <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
        </div>
        <div className={`catalogo-categorias ${isDropdownOpen ? 'menu-open' : ''}`}>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            {Object.keys(categorySynonyms).map(category => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="catalogo-galeria">
          {filteredProducts.map((product, index) => (
            <div className="catalogo-item" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.series}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Eurocolors. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default CatalogoPage;
