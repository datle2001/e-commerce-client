export const environment = {
  production: true,
  api: {
    url: 'http://localhost:8000/api/v1',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer 92|4vDDk1Mu6qJhR9LbHw0lKegdElXak0Uy0W0t8lKn',
    },
  },
  s3: {
    credentials: {
      accessKeyId: 'AKIAZH3DM7T7FEHHV64G',
      region: 'us-west-1',
      secretAccessKey: '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',
    },
    photoBucket: 'ecommerce-product-photos',
  },
};
