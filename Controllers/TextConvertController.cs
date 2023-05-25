using Encoder.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using static Encoder.Controllers.TextConvertController;
//using System.Web.Http;

namespace Encoder.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TextConvertController : ControllerBase
    {
        //[HttpPost]
        //public IActionResult EncodeText([FromBody] TextChuchu textchuchu) {
        //    //var encoded = Convert.ToBase64String(Encoding.UTF8.GetBytes(textchuchu));
        //    //textchuchu = new TextChuchu();
        //    byte[] bytes = System.Text.Encoding.UTF8.GetBytes(textchuchu.PlainText);
        //    string base64String = Convert.ToBase64String(bytes);
        //    return Ok(base64String.ToString());
        //}
        [HttpGet("convert/{text}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<EncodedText> EncodeMyText(string text)
        {
            byte[] bytes = System.Text.Encoding.UTF8.GetBytes(text);
            string base64String = Convert.ToBase64String(bytes);
            string bar = string.Empty;

            EncodedText encode = new()
            {
                Final = base64String
            };
            //EncodeTextOne enc = new EncodeTextOne();
            //foreach (char c in base64String)
            //{
            //    bar += c;
            //    enc.Text = c;
            //    // bar += c;
            //     //return enc;

            //}
            //return enc;

            return base64String == null ? NotFound() : encode;

        }
        public class EncodeTextOne
        {
            public EncodeTextOne()
            {
                this.Text = ' ';

            }
            public char Text { get; set; }

        }

        //public class TextChuchu
        //{
        //    public TextChuchu()
        //    {
        //        this.PlainText = "";
        //    }
        //    public string PlainText { get; set; }
        //}
        public class EncodedText
        {
            public EncodedText()
            {
                this.Final = string.Empty;
            }
            public string Final { get; set; }
        }
    }
}
