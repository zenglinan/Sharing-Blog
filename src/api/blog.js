import request from '../helper/request'

const URL = {
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
  CREATE: '/blog',
  UPDATE: '/blog/:blogId',
  DELETE: '/blog/:blogId'
}
export default {
  getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
    return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
  },
  getIndexBlogs({ page = 1 } = { page: 1 }) {
    return this.getBlogs({ page, atIndex: true })
  },
  getBlogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
    return this.getBlogs({ page, userId, atIndex })
  },
  getDetail({ blogId }) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId), 'GET')
  },
  updateBlog({ blogId }, { title, content, description, atIndex }) {
    return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },
  deleteBlog({ blogId }) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },
  createBlog({ title = '', content = '', description = '(这个糟老头子很懒,什么描述都没有写)', atIndex = false } = { title: '', content: '', description: '' }) {
    return request(URL.CREATE, 'POST', { title, content, description })
  },
}