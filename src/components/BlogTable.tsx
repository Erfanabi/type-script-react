function BlogTable() {
  const blogs = [
    {
      title: 'React Tailwind Card with Grid 1',
      author: 'Erfan Yousefi',
      image: 'https://picsum.photos/536/354',
      text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
    },
    {
      title: 'React Tailwind Card with Grid 2',
      image: 'https://picsum.photos/id/237/536/354',
      author: 'Erfan Yousefi',
      text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
    },
    {
      title: 'React Tailwind Card with Grid 3',
      image: 'https://picsum.photos/seed/picsum/536/354',
      author: 'Erfan Yousefi',
      text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
    },
    {
      title: 'React Tailwind Card with Grid 4',
      image: 'https://picsum.photos/id/1060/536/354?blur=2',
      author: 'Erfan Yousefi',
      text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
    },
  ];

  return (
    <div className={'bg-green-300'}>
      <p>BlogTable</p>

      {blogs.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BlogTable;
