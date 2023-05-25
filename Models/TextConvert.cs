using System.ComponentModel.DataAnnotations;

namespace Encoder.Models
{
    public class TextConvert
    {
        [Key]
        public string? plainText { get; set; }
        //public TextConvert()
        //{
        //    OriginalText = "";
        //}
    }
}
