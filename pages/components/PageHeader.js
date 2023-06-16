import Card from 'react-bootstrap/Card';

export default function PageHeader(text) {
   return (
      <div>
         <Card className="bg-light">
            <Card.Body>
               {text.text}
            </Card.Body>
         </Card>
         <br />
      </div>
   );
}