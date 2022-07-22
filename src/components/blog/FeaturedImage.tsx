import { NextSeo } from 'next-seo'

// TODO: Figure out how to import resource paths here
// import json from './images/json.png'

// TODO: replace with GitHub pages URL / netlify / whatever
// import { rootUrl } from '../../lib/constants'
const rootUrl = ''

const titlesToImages = new Map<string, string>()
titlesToImages.set('Test', '')

type Props = {
  title: string
}

export const FeaturedImage = ({ title }: Props) => {
  const imageSrc = titlesToImages.get(title)

  return imageSrc ? (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: `${rootUrl}${imageSrc}`,
              width: 2048,
              height: 1152,
              alt: `Featured image for ${title}`,
            },
          ],
        }}
        twitter={{
          handle: '@aTwitterHandle',
          cardType: 'summary_large_image',
        }}
      />
      <img src={imageSrc} />
    </>
  ) : null
}
