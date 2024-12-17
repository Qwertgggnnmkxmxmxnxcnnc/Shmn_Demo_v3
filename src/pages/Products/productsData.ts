export interface Product {
  id: number; // Убедитесь, что id имеет тип number
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'Белая керамика',
    category: 'Чайники',
    price: 2800,
    description: 'Китайский чайный набор с керамическим сливником и фильтром. В комплекте стеклянный заварник 350 мл, 4 пиалы по 50 мл, керамический фильтр, полотенце и стильная дорожная сумка с прозрачным жестким каркасом и деревянным ободком для удобного держания',
    image: 'https://optim.tildacdn.com/stor6462-3437-4836-b363-626233336433/-/format/webp/25275289.jpg',
    images: [
      'https://optim.tildacdn.com/stor6462-3437-4836-b363-626233336433/-/format/webp/25275289.jpg',
      'https://optim.tildacdn.com/stor3330-3338-4763-a566-363638333664/-/format/webp/30160613.jpg',
      'https://optim.tildacdn.com/stor3039-3862-4934-b232-663039343962/-/format/webp/87613866.jpg'
    ]
  },
  {
    id: 2,
    name: 'Чётки из вулканического лавы',
    category: 'Малы для медитаций',
    price: 4000,
    description: 'Чётки, выполненные из вулканической лавы. 108 бусин, идеальны для джапа-медитаций! Выполнены на о.Бали, глубоко верующими мастерами. Чистота их сознания передана в этом изделии: его очень приятно даже просто созерцать и держать в руках! Прекрасный, рабочий инструмент Силы',
    image: 'https://optim.tildacdn.com/tild6639-3631-4232-b130-353832396264/-/format/webp/1c5f2d7e17d9932a918a.jpg',
    images: [
      'https://optim.tildacdn.com/tild6639-3631-4232-b130-353832396264/-/format/webp/1c5f2d7e17d9932a918a.jpg',
      'https://optim.tildacdn.com/tild3336-3533-4534-b862-383430613262/-/format/webp/c62319da5ba44141152c.jpg',
      'https://optim.tildacdn.com/tild6234-6332-4364-b332-656333376338/-/format/webp/067c0f3b12c50cd5251a.jpg'
    ]
  },
  {
    id: 3,
    name: 'Саронг',
    category: 'Артефакт',
    price: 2500,
    description: 'это традиционное изделие, сочетающее в себе яркий колорит и глубокий культурный смысл. Ткань украшена изысканным орнаментом в этническом стиле с элементами природы и символики, выполненными в тёплых золотисто-оранжевых и контрастных чёрных тонах',
    image: 'https://optim.tildacdn.com/stor3763-3435-4534-a161-343230646134/-/format/webp/79256712.jpg',
    images: [
      'https://optim.tildacdn.com/stor3763-3435-4534-a161-343230646134/-/format/webp/79256712.jpg',
      'https://optim.tildacdn.com/stor6634-3165-4663-a331-326363653139/-/format/webp/54742518.jpg',
      'https://optim.tildacdn.com/stor3439-3965-4638-b335-663461353063/-/format/webp/83684425.jpg',
  
    ]
  },
  {
    id: 4,
    name: 'Трубки для курения, из ценных пород дерева',
    category: 'Трубки',
    price: 6800,
    description: 'Артефакт - Трубка для курения, воскуривания, в виде тотема. Выполнены из дерева Соно. Соно - это элитная древесина, напоминающая по текстуре черное дерево. И очень плотное',
    image: 'https://optim.tildacdn.com/tild3364-3465-4566-b133-653938313261/-/format/webp/f3f4a3f22818f667e99b.jpg',
    images: [
      'https://optim.tildacdn.com/tild3364-3465-4566-b133-653938313261/-/format/webp/f3f4a3f22818f667e99b.jpg',
      'https://optim.tildacdn.com/tild3162-3361-4936-b263-623731333332/-/format/webp/b17cbdecc92062cf4c3a.jpg',
      'https://optim.tildacdn.com/tild3162-3030-4566-b936-343333613638/-/format/webp/700cbfc314ba1f0c2a77.jpg',
    ]
  },
  {
    id: 5,
    name: 'Соно',
    category: 'Тепи',
    price: 2000,
    description: 'Артефакт - Трубка для курения, воскуривания, в виде тотема. Выполнены из дерева Соно. Соно - это элитная древесина, напоминающая по текстуре черное дерево. И очень плотное',
    image: 'https://optim.tildacdn.com/stor3938-3166-4861-b364-616136373930/-/format/webp/26643356.jpg',
    images: [
      'https://optim.tildacdn.com/stor3938-3166-4861-b364-616136373930/-/format/webp/26643356.jpg',
      'https://optim.tildacdn.com/stor3739-6234-4932-a662-373432303865/-/format/webp/61340744.jpg',
      'https://optim.tildacdn.com/stor3339-6664-4338-a662-343164616138/-/format/webp/88926227.jpg',
    ]
  },
  {
    id: 6,
    name: 'Palo Santo',
    category: 'Благовоние',
    price: 800,
    description: 'Мелкие щепы (4-6 гр) Пало Санто от премиального. 55+- гр. Для очищения и наполнения позитивными вибрациями',
    image: 'https://optim.tildacdn.com/stor3038-6635-4434-a464-386263646135/-/format/webp/14923433.jpg',
    images: [
      'https://optim.tildacdn.com/stor3038-6635-4434-a464-386263646135/-/format/webp/14923433.jpg',
      'https://optim.tildacdn.com/stor3138-3638-4239-a337-633662383239/-/format/webp/48224560.jpg',
      'https://optim.tildacdn.com/stor3465-6638-4761-b331-373061303931/-/format/webp/35935320.jpg',
    ]
  },
];
