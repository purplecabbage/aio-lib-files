
const mockObj = {

  StorageSharedKeyCredential: jest.fn(),
  // ContainerClient
  BlobServiceClient: jest.fn(() => {
    return {
      getContainerClient: jest.fn(() => {
        return {
          createIfNotExists: jest.fn(),
          url: 'somestring',
          getBlockBlobClient: jest.fn(() => {
            return {
              download: jest.fn(() => {
                console.log('downlad called')
                return 'yeah, ima not gonna do that for you'
              })
            }
          })
        }
      })
    }
  }),
  ContainerClient: jest.fn((async () => {
    return {
      createIfNotExists: jest.fn(),
      url: 'somestring',
      getBlockBlobClient: jest.fn(() => {
        return {
          download: jest.fn(() => {
            console.log('downlad called')
            return 'yeah, ima not gonna do that for you'
          })
        }
      })
    }
  }))
}

module.exports = mockObj
