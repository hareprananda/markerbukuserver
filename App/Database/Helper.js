export default {
  async pagination({ model, page = 1, perPage = 10, sort = {}, find = {} }) {
    page = parseInt(page);
    let data;
    const skip = (page - 1) * perPage;

    let lastPage = (await model.countDocuments().exec()) / perPage;
    lastPage =
      lastPage - parseInt(lastPage) > 0
        ? parseInt(lastPage) + 1
        : parseInt(lastPage);
    if ((data = await model.find(find).sort(sort).skip(skip).exec()))
      return {
        data: data,
        currentPage: page,
        lastPage: lastPage,
      };

    return "Oops something gone wrong";
  },
};
