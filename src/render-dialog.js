module.exports = ({
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
    name: "Delete All Samples",
    onClick: () => {
      setInDataset(dataset, ["samples"], [])
      onSuccess("All samples deleted!")
    },
  })
}
