import transportImg from '../assets/images/solution-transport.jpg'
import industryImg from '../assets/images/solution-industry.jpg'
import cityImg from '../assets/images/solution-city.jpg'
import securityImg from '../assets/images/solution-security.jpg'

export interface Solution {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  problems: string[];
  features: string[];
  recommendedProducts: string[];
  cases: string[];
}

export const solutions: Solution[] = [
  {
    id: 'transport',
    name: 'Транспорт и логистика',
    shortDescription: 'Интеллектуальные транспортные системы и контроль дорожного движения',
    description: 'Комплексные решения для управления транспортными потоками, контроля нарушений ПДД и повышения безопасности на дорогах.',
    icon: 'truck',
    image: transportImg,
    problems: [
      'Нарушения скоростного режима',
      'Проезд на запрещающий сигнал',
      'Выезд на полосу встречного движения',
      'Контроль грузового транспорта',
      'Мониторинг общественного транспорта'
    ],
    features: [
      'Фиксация нарушений ПДД в автоматическом режиме',
      'Контроль средней скорости на участках',
      'Детекция заторов и инцидентов',
      'Подсчет интенсивности трафика',
      'Интеграция с системами весогабаритного контроля'
    ],
    recommendedProducts: ['factor-kfvvf', 'factor-ai', 'server-analytics', 'plate-enhancement'],
    cases: ['case-mkad', 'case-tatarstan', 'case-kazan']
  },
  {
    id: 'industry',
    name: 'Промышленность и энергетика',
    shortDescription: 'Системы безопасности и мониторинга для промышленных объектов',
    description: 'Решения для контроля промышленной безопасности, мониторинга технологических процессов и защиты критической инфраструктуры.',
    icon: 'factory',
    image: industryImg,
    problems: [
      'Контроль доступа на объект',
      'Соблюдение техники безопасности',
      'Мониторинг технологических процессов',
      'Предотвращение аварийных ситуаций',
      'Защита периметра'
    ],
    features: [
      'Детекция присутствия СИЗ (каски, жилеты)',
      'Контроль нахождения в опасных зонах',
      'Детекция дыма и огня',
      'Мониторинг оборудования',
      'Интеграция с системами автоматики'
    ],
    recommendedProducts: ['factor-ai', 'factor-b2', 'server-analytics', 'video-surveillance'],
    cases: ['case-gazprom', 'case-rosatom']
  },
  {
    id: 'smart-city',
    name: 'Умный город и безопасность',
    shortDescription: 'Интеллектуальные системы для городской инфраструктуры',
    description: 'Технологии видеоаналитики для повышения безопасности, улучшения городской среды и оптимизации коммунальных служб.',
    icon: 'city',
    image: cityImg,
    problems: [
      'Общественная безопасность',
      'Контроль благоустройства',
      'Мониторинг общественных пространств',
      'Реагирование на инциденты',
      'Управление парковками'
    ],
    features: [
      'Распознавание лиц в потоке',
      'Детекция оставленных предметов',
      'Контроль несанкционированных свалок',
      'Мониторинг заполненности контейнеров',
      'Анализ пешеходных потоков'
    ],
    recommendedProducts: ['factor-ai', 'server-analytics', 'factor-b2'],
    cases: ['case-moscow', 'case-spb']
  },
  {
    id: 'critical-infrastructure',
    name: 'Критическая инфраструктура',
    shortDescription: 'Защита объектов повышенной важности',
    description: 'Специализированные решения для аэропортов, вокзалов, метрополитена и других объектов критической инфраструктуры.',
    icon: 'shield',
    image: securityImg,
    problems: [
      'Террористическая угроза',
      'Контроль доступа',
      'Мониторинг периметра',
      'Координация служб безопасности',
      'Расследование инцидентов'
    ],
    features: [
      'Детекция аномального поведения',
      'Распознавание лиц в реальном времени',
      'Контроль зон ограниченного доступа',
      'Интеграция с СКУД',
      'Архивирование и быстрый поиск'
    ],
    recommendedProducts: ['factor-ai', 'server-analytics', 'video-surveillance'],
    cases: ['case-airport', 'case-metro']
  }
];
