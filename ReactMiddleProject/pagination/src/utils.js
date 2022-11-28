const paginate = (follower) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(follower.length / itemsPerPage);

  const newFollower = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return follower.slice(start, start + itemsPerPage);
  });
  return newFollower;
};

export default paginate;
