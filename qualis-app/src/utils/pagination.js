export function pagination(data, page_size, page_number) {
  return {
    data: data.slice((page_number - 1) * page_size, page_number * page_size),
    numberOfPages: Math.floor(data.length / page_size),
  };
}
