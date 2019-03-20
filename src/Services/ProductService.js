/* eslint-disable promise/param-names */
// fake api for list products
let products = [
  { id: 1, name: 'candy', amount: 5 },
  { id: 2, name: 'Biscuit', amount: 10 },
  { id: 3, name: 'ice cream', amount: 20 },
  { id: 4, name: 'Book', amount: 3 },
  { id: 5, name: 'Pencil', amount: 50 },
  { id: 6, name: 'Bowl', amount: 21 },
  { id: 7, name: 'Phone', amount: 5 },
  { id: 8, name: 'Monitor', amount: 7 },
  { id: 9, name: 'Mouse', amount: 10 },
  { id: 10, name: 'Note book', amount: 20 },
  { id: 11, name: 'Chair', amount: 35 },
  { id: 12, name: 'Remote', amount: 100 },
]
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

// Get list product
export const getListProduct = filter => {
  return new Promise((resolve, reject) => {
    const { page, limit } = filter
    let newProducts = [...products].reverse()
    let listItems = chunk(newProducts, limit)
    const items = listItems[page - 1]
    setTimeout(() => {
      resolve({
        items,
        totalCount: products.length,
        totalPages: listItems.length,
      })
    }, 1000)
  })
}

// Delete product
export const deleteProduct = id => {
  return new Promise((resolve, reject) => {
    let newProducts = products.filter(pro => pro.id !== id)
    products = newProducts
    setTimeout(() => {
      resolve({
        result: 'success',
      })
    }, 1000)
  })
}
// Get item detail
export const getItem = id => {
  return new Promise((resolve, reject) => {
    let item = products.find(i => i.id === id)
    setTimeout(() => {
      if (item) {
        resolve({
          result: 'success',
          item,
        })
      } else {
        resolve({
          result: 'fail',
          error: 'Could not find that item',
        })
      }
    }, 500)
  })
}

// Create Product
export const createProduct = values => {
  return new Promise((resolve, reject) => {
    let newProduct = {
      id: products.length + +1,
      name: values.name,
      amount: values.amount,
    }
    products.push(newProduct)
    setTimeout(() => {
      resolve({
        result: 'success',
        item: newProduct,
      })
    }, 1000)
  })
}

// Edit Product
export const editProduct = (id, values) => {
  return new Promise((resolve, reject) => {
    let newProducts = products.map(pro => {
      if (pro.id === id) {
        return {
          id,
          name: values.name,
          amount: values.amount,
        }
      }
      return pro
    })
    products = newProducts
    setTimeout(() => {
      resolve({
        result: 'success',
        item: products[id],
      })
    }, 1000)
  })
}
