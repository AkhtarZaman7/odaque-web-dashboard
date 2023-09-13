import CoursesList from '../../../../components/Courses/CoursesList';
import DashboardHeader from '../../../../components/Dashboard/DashboardHeader';



const data = [
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
  {
    id: 1,
    name: 'Hitt Cardio',
    description:
      'Boost your cardio and strengthen your core with this 30-minute HIIT workout.',
    image: '/images/hitt-cardio.jpg',
    rating: '4.5',
    startDtae: '2021-01-01',
    endDate: '2021-01-31',
    status: 'Active',
    instructor: {
      name: 'John Doe',
      image: '/images/john-doe.jpg',
    },
    location: 'Studio 1',
  },
];
const Courses = () => (
  <div className="content">
    <DashboardHeader />
    <CoursesList data={data} />
  </div>
);

export default Courses;
