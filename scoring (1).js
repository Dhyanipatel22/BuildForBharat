// Get the elements from the HTML
const companyNameInput = document.getElementById('companyName');
const productNameInput = document.getElementById('productName');
const priceInput = document.getElementById('price');
const modelNumberInput = document.getElementById('modelNumber');
const warrantyInput = document.getElementById('warranty');
const uploadImageInput = document.getElementById('uploadImage');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

// Function to calculate the progress percentage
function calculateProgress(companyName, productName, price, modelNumber, warranty, uploadImage) {
  let totalFields = 6; // Total number of fields
  let filledFields = 0; // Number of filled fields

  if (companyName && companyName.trim().length > 0) filledFields++;
  if (productName && productName.trim().length > 0) filledFields++;
  if (price && price.trim().length > 0) filledFields++;
  if (modelNumber && modelNumber.trim().length > 0) filledFields++;
  if (warranty && warranty.trim().length > 0) filledFields++;
  if (uploadImage && uploadImage.files.length > 0) filledFields++;

  return (filledFields / totalFields) * 100; // Calculate percentage
}
// Function to update the progress bar and text
function updateProgress() {
  const progress = calculateProgress(
      companyNameInput.value,
      productNameInput.value,
      priceInput.value,
      modelNumberInput.value,
      warrantyInput.value,
      uploadImageInput
  );
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  updateProgress(companyName, productName, price, modelNumber, warranty, uploadImage);
  console.log('Product submitted:', {
    CompanyName: companyNameInput.value,
    ProductName: productNameInput.value,
    Price: priceInput.value,
    ModelNumber: modelNumberInput.value,
    Warranty: warrantyInput.value,
    UploadImage: uploadImageInput.value,
  });
}

// Attach the submit handler to the form
document.getElementById('product-form').addEventListener('submit', handleSubmit);

// Initial progress calculation and update
updateProgress();
