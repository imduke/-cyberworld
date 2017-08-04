using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Iota.Lib.CSharp.Api.Core;
using Iota.Lib.CSharp.Api.Model;
using Iota.Lib.CSharp.Api.Utils;
using Iota.Lib.CSharp.Api.Exception;
using Iota.Lib.CSharp.Api.Utils.Rest;
using Iota.Lib.CSharp.Api;
using System.Windows.Forms;

namespace IOTAAPI
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btn_GetInfo_Click(object sender, EventArgs e)
        {
            IotaCoreApi iotaCoreApi = new IotaCoreApi(richTextBox1.Text, (int)(numericUpDown1.Value));
            GetNodeInfoResponse getNodeInfoResponse = iotaCoreApi.GetNodeInfo();

            richTextBox1.Text += getNodeInfoResponse.AppName + "/n";
            richTextBox1.Text += getNodeInfoResponse.AppVersion + "/n";
            richTextBox1.Text += getNodeInfoResponse.LatestMilestone + "/n";
        }
    }
}
