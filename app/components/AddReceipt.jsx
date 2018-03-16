import React from 'react'
import { Button, Icon, Input, Modal, Upload } from 'antd'

class AddReceipt extends React.Component {
  state = {
    modalVisible: false,
    previewVisible: false,
    previewImage: '',
    fileList: [],
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible })
  }

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div>Upload</div>
      </div>
    )

    return (
      <div>
        <Button type="primary" onClick={() => this.setModalVisible(true)}>
          Add-receipt
        </Button>

        <Modal
          title="New Receipt"
          className="add-receipt-modal"
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Input placeholder="Title" />
          <Input placeholder="Title" />
        </Modal>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="preview" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

export default AddReceipt
