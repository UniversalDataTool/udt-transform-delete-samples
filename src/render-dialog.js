export default ({
  elm,
  dataset,
  setInDataset,
  addAction,
  removeAction,
  onSuccess,
}) => {
  elm.innerHTML = `

  Click the "Delete All Samples" button to delete all of your samples!

  `.trim()

  addAction({
    text: "Delete All Samples",
    onClick: () => {
      setInDataset(["samples"], [])
      onSuccess("All samples deleted!")
    },
  })
}
