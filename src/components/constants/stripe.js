const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_51HGOoRJ97z5W4ogS2hpNLUsiBxf8o2a2yWl7OMFKfNNGvrOn9qsh3OORMVmZsdOit6UtAm5WIo6MxY4tl6aovu9W00qfZ62WPB';

export default STRIPE_PUBLISHABLE;