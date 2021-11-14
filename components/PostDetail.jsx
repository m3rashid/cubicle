import React from 'react';
import PostMeta from './PostMeta';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) { modifiedText = (<b key={index}>{text}</b>) }
      if (obj.italic) { modifiedText = (<em key={index}>{text}</em>) }
      if (obj.underline) { modifiedText = (<u key={index}>{text}</u>) }
      if (obj.code) { modifiedText = (<code className="bg-gray-900 px-2 py-1 rounded-md" key={index}>{text}</code>) }
      if (obj.type === 'link') { modifiedText = (<a className="text-red-500" target="_blank" rel="noopener noreferrer" href={obj.href} key={index}>{obj.children[0].text}</a>) }
    }

    switch (type) {

      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;

      case 'paragraph':
        return <p key={index} className="mb-6">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;

      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;

      case 'image':
        return (<img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />);

      case 'code-block':
        let a = modifiedText[0].replace(/ /g, '&nbsp;');
        modifiedText = a.replace(/\n/g, '<br />');
        return <div key={index} className="bg-gray-900 px-2 py-1 mb-6 rounded-md font-mono">
          <div style={{ wordWrap: 'break-word', width: '100%' }} dangerouslySetInnerHTML={{ __html: modifiedText }} />
        </div>;

      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-gray-700 shadow-lg rounded-md pb-2 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-md" />
        </div>
        <div className="px-3 sm:px-6 lg:px-8">
          <PostMeta post={post} />
          <h1 className="mb-8 text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">{post.title}</h1>
          <div className="text-white">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default PostDetail;
