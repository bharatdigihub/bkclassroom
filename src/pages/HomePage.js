import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css'; // Custom CSS for homepage styling

const HomePage = () => {
  return (
    <Container className="homepage">
      {/* Text Slider */}
      <section className="text-slider my-4">
        <Carousel>
          <Carousel.Item>
            <h3>Welcome to My Blog Portal</h3>
            <p>Discover amazing blogs and news in various categories.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Share Your Thoughts</h3>
            <p>Post comments, like posts, and engage with the community.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h3>Explore Trending Topics</h3>
            <p>Stay updated with the latest trends and news.</p>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Latest Blogs Section */}
      <section className="latest-blogs my-4">
        <h2>Latest Blogs</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
  
              <Card.Body>
                <Card.Title>Blog Title 1</Card.Title>
                <Card.Text>Short description of the latest blog.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
           
              <Card.Body>
                <Card.Title>Blog Title 2</Card.Title>
                <Card.Text>Another recent blog description.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
             
              <Card.Body>
                <Card.Title>Blog Title 3</Card.Title>
                <Card.Text>A description of a trending blog.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Trending Blogs Section */}
      <section className="trending-blogs my-4">
        <h2>Trending Blogs</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Trending Blog Title 1</Card.Title>
                <Card.Text>A summary of a trending blog post.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Trending Blog Title 2</Card.Title>
                <Card.Text>Another trending blog post summary.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Trending News Section */}
      <section className="trending-news my-4">
        <h2>Trending News</h2>
        <Row>
          <Col md={12}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Breaking News 1</Card.Title>
                <Card.Text>Latest breaking news description.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonial Section */}
      <section className="testimonials my-4">
        <h2>What Our Users Say</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"This blog platform has transformed the way I read and share information!"</p>
                  <footer className="blockquote-footer">John Doe</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>"Amazing content and great community. Highly recommended!"</p>
                  <footer className="blockquote-footer">Jane Smith</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default HomePage;
