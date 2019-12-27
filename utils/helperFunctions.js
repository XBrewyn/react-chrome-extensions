export const manifest = () => {
  if (process.env.NODE_ENV === 'production') {
    const tagLink = document.createElement('link');

    tagLink.rel = 'manifest';
    tagLink.href = '<%= htmlWebpackPlugin.options.manifest %>';

    document.head.appendChild(tagLink);
  }
};
