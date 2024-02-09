import React from 'react';

class ImageUploader extends React.Component {
    state = {
        imageQualities: [],
    };

    handleImageUpload = (event) => {
        const files = event.target.files;
        const imageQualities = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const quality = this.calculateImageQuality(imageData);
                imageQualities.push(quality);
                this.setState({ imageQualities });
            };
            img.src = URL.createObjectURL(file);
        }
    };

    calculateImageQuality = (imageData) => {
        // Here you can implement your own algorithm to calculate image quality
        // For simplicity, let's just check the average pixel value
        const data = imageData.data;
        let total = 0;
        for (let i = 0; i < data.length; i += 4) {
            total += (data[i] + data[i + 1] + data[i + 2]) / 3; // Average of RGB values
        }
        const averagePixelValue = total / (imageData.width * imageData.height);
        // You can adjust the threshold based on your requirements
        if (averagePixelValue > 100) {
            return 'Clear';
        } else {
            return 'Blurry';
        }
    };

    render() {
        const { imageQualities } = this.state;

        return (
            <div>
                <label htmlFor="images">Upload Images*</label> 
                <input 
                    type="file"
                    accept="image/*"
                    name="images"
                    id="images"
                    placeholder="Select Images"
                    multiple
                    onChange={this.handleImageUpload}
                    required 
                />
                <div>
                    {imageQualities.map((quality, index) => (
                        <p key={index}>Image {index + 1}: {quality}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default ImageUploader;

