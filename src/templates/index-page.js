import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

import gluBg from '../img/bg-medium.jpg'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        display: 'none',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column'
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient" style={{ display: 'none' }}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <img className="bg-image" src={gluBg} alt="Glu"/>
    <div className="form-wrapper">
      <div className="glu-logo-wrapper">
        <svg width="282px" height="231px" viewBox="0 0 282 231" version="1.1">
          <title>glu-logo</title>
          <g id="Glu-Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="glu-logo---soft-corners---flattened" stroke="#000000" stroke-width="2">
              <path d="M50,160 C56.627417,160 62,165.372583 62,172 L62,181 C62,187.627417 56.627417,193 50,193 C43.372583,193 38,187.627417 38,181 L38,175 C38,173.895431 37.1045695,173 36,173 L3.44971356,173 C2.43533405,173 1.58159822,173.759389 1.46335018,174.766854 C1.15406041,177.401865 1,179.482483 1,181 C1,208.061953 22.9380473,230 50,230 C77.0619527,230 99,208.061953 99,181 L99,64 C99,62.8954305 98.1045695,62 97,62 L50,62 C22.9380473,62 1,83.9380473 1,111 C1,138.061953 22.9380473,160 50,160 Z M220,111 L220,64 C220,62.8954305 219.104569,62 218,62 L185,62 C183.895431,62 183,62.8954305 183,64 L183,111 C183,138.061953 204.938047,160 232,160 C259.061953,160 281,138.061953 281,111 L281,64 C281,62.8954305 280.104569,62 279,62 L246,62 C244.895431,62 244,62.8954305 244,64 L244,111 C244,117.627417 238.627417,123 232,123 C225.372583,123 220,117.627417 220,111 Z M125,1 C123.895431,1 123,1.8954305 123,3 L123,158 C123,159.104569 123.895431,160 125,160 L159,160 C160.104569,160 161,159.104569 161,158 L161,3 C161,1.8954305 160.104569,1 159,1 L125,1 Z" id="glu-logo"></path>
            </g>
          </g>
        </svg>
      </div>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        title="glu-rsvp-form"
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shryhSC3jBMJloRf9?backgroundColor=grayLight"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="789"
        style={{ background: 'transparent' }}></iframe>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
