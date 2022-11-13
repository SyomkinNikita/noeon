import React, { FC } from 'react'
import { FullBanner } from '../../../components/FullBanner/FullBanner'
import { Menu } from '../../../components/Menu/Menu'
import { Logo } from '../../../components/Logo/Logo'
import './BlogPost.styles.scss'
import banner from '../assets/blogPost-banner.jpg'
import blogImg from '../assets/blogPost-img.jpg'
import blogImg2 from '../assets/blogPost-img-2.png'
import blogImg3 from '../assets/blogPost-img-3.png'
import { BlogTitle } from './BlogTitle/BlogTitle'
import { BlogDate } from './BlogDate/BlogDate'
import { BlogText } from './BlogText/BlogText'
import { BlogImage } from './BlogImage/BlogImage'
import { BlogList } from './BlogList/BlogList'
import { Footnote } from './Footnote/Footnote'
import { BlogReferences } from './BlogReferences/BlogReferences'
import { references } from './BlogReferences/constants'
import { BlogTableOfContents } from './BlogTableOfContents/BlogTableOfContents'
import { menuItems } from './constants'
import { useWindowSize } from '../../../hooks/useWindowSize'


type TBlogPostProps = {}

const BlogPost: FC<TBlogPostProps> = () => {
  const { width } = useWindowSize()

  return (
    <>
      <div className='wrapper'>
        <Menu />
        <Logo isHiddenSecondBlock={true}/>
        <FullBanner src={banner} withMargin />
      </div>
      <div className='wrapper blogPost__grid companyBlock'>
        <div className='blogPost__menu'>
          <div className='blogPost__menu-wrapper'>
            <BlogTableOfContents content={menuItems} />
          </div>
        </div>
        <div className='blog__wrapper blog__wrapper_post'>
          <div className='col-xxs-8 col-xl-6' id='title'>
            <BlogTitle title='Cities Take the Lead in Setting Rules Around How AI Is Used' />
            {width < 1768 && <BlogDate date='Nov 14, 2022' />}
            <BlogText
              text={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in libero. Fusce vitae porta purus. Nullam nulla orci, pulvinar mattis magna nec, porta placerat neque. Proin rutrum leo vel urna laoreet, sit amet dictum nisl dictum. Quisque venenatis mattis quam in tempus. Morbi eu posuere nisi. Praesent eleifend non massa eget fringilla. Vivamus laoreet metus vel quam finibus, sed placerat magna imperdiet. Duis at sollicitudin mi, ut eleifend velit. Nulla tincidunt posuere dictum. Suspendisse lobortis ligula ut varius viverra. Praesent hendrerit arcu id sapien vestibulum venenatis',
                'Curabitur consectetur interdum dolor. Nullam vel diam quis leo aliquam dapibus. Ut quis rutrum nunc, tristique maximus turpis. Phasellus sollicitudin mauris leo. Etiam a orci vel enim tristique iaculis. Integer elementum finibus est, et suscipit neque. Etiam ex eros, gravida et cursus eget, lacinia eget leo. Curabitur molestie elit eros, at venenatis metus porta quis. Vivamus malesuada vitae sem ac porta.',
                'Nam faucibus pulvinar volutpat. Etiam a nulla sapien. In imperdiet dui id vulputate gravida. Ut sagittis porta placerat. Integer porttitor mi sed lectus pulvinar tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed suscipit turpis augue, ac euismod nulla condimentum sit amet. Vestibulum eu tortor blandit, egestas felis eu, posuere est. Cras efficitur a libero ut mattis.',
                'Duis vulputate, tortor non blandit vestibulum, arcu felis facilisis urna, sit amet congue sapien mi vehicula mi. Nullam massa est, mollis vulputate accumsan in, euismod non libero. Vivamus ut purus elit. In posuere ornare elit. Aenean ut convallis magna. In malesuada magna sit amet nunc facilisis venenatis. Sed ut porttitor leo. Cras suscipit, dolor vel tempus consectetur, nisi odio auctor neque, eu aliquam dolor ipsum eget lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis neque, hendrerit eget augue accumsan, suscipit blandit odio.',
                'Praesent viverra nulla ut felis dictum volutpat non nec sem. Sed sodales lacus leo, quis maximus nulla bibendum non. Suspendisse rutrum ante id enim facilisis, sit amet varius sem elementum. Integer scelerisque dolor neque, vitae congue augue luctus eget. Suspendisse potenti. Quisque urna massa, efficitur vitae eros non, commodo malesuada lacus. Curabitur massa magna, eleifend at elementum vitae, pretium a mi. Praesent feugiat pellentesque odio varius lobortis.'
              ]}
            />
            <BlogText
              title='Lorem ipsum dolor'
              text={[
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in libero. Fusce vitae porta purus. Nullam nulla orci, pulvinar mattis magna nec, porta placerat neque. Proin rutrum leo vel urna laoreet, sit amet dictum nisl dictum. Quisque venenatis mattis quam in tempus. Morbi eu posuere nisi. Praesent eleifend non massa eget fringilla. Vivamus laoreet metus vel quam finibus, sed placerat magna imperdiet. Duis at sollicitudin mi, ut eleifend velit. Nulla tincidunt posuere dictum. Suspendisse lobortis ligula ut varius viverra. Praesent hendrerit arcu id sapien vestibulum venenatis',
                'Curabitur consectetur interdum dolor. Nullam vel diam quis leo aliquam dapibus. Ut quis rutrum nunc, tristique maximus turpis. Phasellus sollicitudin mauris leo. Etiam a orci vel enim tristique iaculis. Integer elementum finibus est, et suscipit neque. Etiam ex eros, gravida et cursus eget, lacinia eget leo. Curabitur molestie elit eros, at venenatis metus porta quis. Vivamus malesuada vitae sem ac porta.',
                'Nam faucibus pulvinar volutpat. Etiam a nulla sapien. In imperdiet dui id vulputate gravida. Ut sagittis porta placerat. Integer porttitor mi sed lectus pulvinar tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed suscipit turpis augue, ac euismod nulla condimentum sit amet. Vestibulum eu tortor blandit, egestas felis eu, posuere est. Cras efficitur a libero ut mattis.',
                'Duis vulputate, tortor non blandit vestibulum, arcu felis facilisis urna, sit amet congue sapien mi vehicula mi. Nullam massa est, mollis vulputate accumsan in, euismod non libero. Vivamus ut purus elit. In posuere ornare elit. Aenean ut convallis magna. In malesuada magna sit amet nunc facilisis venenatis. Sed ut porttitor leo. Cras suscipit, dolor vel tempus consectetur, nisi odio auctor neque, eu aliquam dolor ipsum eget lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis neque, hendrerit eget augue accumsan, suscipit blandit odio.',
                'Praesent viverra nulla ut felis dictum volutpat non nec sem. Sed sodales lacus leo, quis maximus nulla bibendum non. Suspendisse rutrum ante id enim facilisis, sit amet varius sem elementum. Integer scelerisque dolor neque, vitae congue augue luctus eget. Suspendisse potenti. Quisque urna massa, efficitur vitae eros non, commodo malesuada lacus. Curabitur massa magna, eleifend at elementum vitae, pretium a mi. Praesent feugiat pellentesque odio varius lobortis.'
              ]}
            />
          </div>
          <div className='col-xxs-8 col-sm-8 col-xl-6' id='fullScreen'>
            <BlogImage
              img={{ position: 'right', src: blogImg3 }}
              descriptionImg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero'
              type='fullScreen'
            />
          </div>
          <div className='col-xxs-8 col-sm-7 col-xl-5' id='blogImageLeft'>
            <BlogImage
              img={{ position: 'left', src: blogImg }}
              descriptionImg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero'
              type='nonFullScreen'
              additionalText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in libero. Fusce vitae porta purus. Nullam nulla orci, pulvinar mattis magna nec, porta placerat neque. Proin rutrum leo vel urna laoreet, sit amet dictum nisl dictum. Quisque venenatis mattis quam in tempus.'
            />
          </div>
          <Footnote
            id='footNote'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in libero.'
          />
          <div className='col-xxs-8 col-sm-7 col-xl-5' id='blogImageRight'>
            <BlogImage
              img={{ position: 'right', src: blogImg2 }}
              descriptionImg='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero'
              type='nonFullScreen'
              additionalText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem felis, consectetur at dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in libero. Fusce vitae porta purus. Nullam nulla orci, pulvinar mattis magna nec, porta placerat neque. Proin rutrum leo vel urna laoreet, sit amet dictum nisl dictum. Quisque venenatis mattis quam in tempus.'
            />
          </div>
          <div className='col-xxs-8 col-sm-6 col-xl-5' id='blogListOrdered'>
            <BlogList
              text={`<ol>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
          </ol>`}
            />
          </div>
          <div className='col-xxs-8 col-sm-6 col-xl-5' id='blogListUnOrdered'>
            <BlogList
              text={`<ul>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
              <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Vestibulum sem felis, consectetur at
                  dictum sed, dignissim sit amet libero. Integer turpis nisl, placerat sit amet dictum in, commodo in
                  libero.
              </li>
          </ul>`}
            />
          </div>
          <BlogReferences
            id='references'
            title='References'
            references={references}
          />
        </div>
      </div>
    </>
  )
}

export default BlogPost
