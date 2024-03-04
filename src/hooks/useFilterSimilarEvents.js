const useFilterSimilarEvents = (events, firstTarget, secondtarget) => {
  const filteredData = events
    .filter((item) => item.id !== firstTarget)
    .filter((item) => item?.category === secondtarget)
  return filteredData
}

export default useFilterSimilarEvents
