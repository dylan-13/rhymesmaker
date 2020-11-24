import * as React from 'react';
import { FC } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

interface IProps {
  name: string;
  alt: string;
  className?: string;
}

const Image: FC<IProps> = ({ name, alt, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allImages: allFile {
          nodes {
            publicURL
            extension
            sharp: childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={({ allImages }) => {
      const image = allImages.nodes.find(
        (node: any) => node.publicURL.indexOf(name) !== -1
      );
      if (!image) {
        return null;
      }
      // svg support
      if (image && image.extension === 'svg') {
        return (
          <img
            className={className}
            src={image.publicURL}
            alt={alt}
            width="100"
            height="100"
          />
        );
      }
      return <Img className={className} fluid={image.sharp.fluid} alt={alt} />;
    }}
  />
);

export { Image };
