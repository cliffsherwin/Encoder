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

            EncodedText encode = new()
            {
                Final = base64String
            };

            return base64String == null ? NotFound() : encode;

        }

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
