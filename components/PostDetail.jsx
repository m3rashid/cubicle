import React from 'react';
import Image from 'next/image'
import PostMeta from './PostMeta';

const PostDetail = ({ post }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) { modifiedText = (<b key={index}>{text}</b>) }
      if (obj.italic) { modifiedText = (<em key={index}>{text}</em>) }
      if (obj.underline) { modifiedText = (<u key={index}>{text}</u>) }
      if (obj.code) { modifiedText = (<code className="bg-gray-900 px-3 py-0.5 rounded-md lg:rounded-lg" key={index}>{text}</code>) }
      if (obj.type === 'link') { modifiedText = (<a className="text-red-500" target="_blank" rel="noopener noreferrer" href={obj.href} key={index}>{obj.children[0].text}</a>) }
    }

    switch (type) {

      case 'heading-one':
        return <h1 key={index} className="text-2xl font-semibold mb-4">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h1>;

      case 'heading-two':
        return <h2 key={index} className="text-2xl font-semibold mb-4">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h2>;

      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-3">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h3>;

      case 'heading-four':
        return <h4 key={index} className="text-xl font-semibold mb-3">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h4>;

      case 'heading-five':
        return <h5 key={index} className="text-md font-semibold mb-2">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h5>;

      case 'heading-six':
        return <h6 key={index} className="text-md font-semibold mb-2">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </h6>;

      case 'paragraph':
        return <p key={index} className="mb-6">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
        </p>;

      case "block-quote":
        const leftQuote = <div className="inline-block mr-2"><Image src="/left-quote.png" height="30px" width="30px" alt="left-quote" /></div>
        return <div key={`quote-${index}`} className="mb-6 pl-3 pr-3 text-justify border border-red-500 rounded-md lg:rounded-lg py-3">
          {modifiedText.map((item, i) => <React.Fragment key={i}>{leftQuote}{item}</React.Fragment>)}
        </div>

      case 'image':
        return (<img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />);

      case 'code-block':
        let a = modifiedText[0].replace(/ /g, '&nbsp;');
        modifiedText = a.replace(/\n/g, '<br />');
        return <div key={index} className="bg-gray-900 px-2 py-1 mb-6 rounded-md lg:rounded-lg font-mono">
          <div style={{ wordWrap: 'break-word', width: '100%' }} dangerouslySetInnerHTML={{ __html: modifiedText }} />
        </div>;

      case 'bulleted-list':
        let data1 = obj.children.map((child1, i) => {
          return child1.children.map((child2, j) => {
            return <li className="mb-2 flex" key={`${i}-${j}`}>
              <div className="mr-2">○</div>
              <div>
                {child2.children.map((child3, k) => {
                  return getContentFragment(k, child3.text, child3)
                })}
              </div>
            </li>
          })
        })
        return <ul key={index} className="mb-6 list-disk">{data1}</ul>

      case 'numbered-list':
        let data2 = obj.children.map((child1, i) => {
          return child1.children.map((child2, j) => {
            return <li className="mb-2 flex" key={`${i}-${j}`}>
              <div className="mr-2">{i + 1}.</div>
              <div>
                {child2.children.map((child3, k) => {
                  return getContentFragment(k, child3.text, child3)
                })}
              </div>
            </li>
          })
        })
        return <ol key={index} className="list-decimal mb-6">{data2}</ol>

      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg  pb-2 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-md lg:rounded-lg" />
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
