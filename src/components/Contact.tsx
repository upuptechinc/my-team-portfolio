import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${apiBase}/api/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result?.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'メッセージが正常に送信されました。すぐにご連絡いたします。',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result?.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = 'メッセージの送信に失敗しました。後でもう一度お試しいただくか、passionmuse16@gmail.com まで直接お問い合わせください。';
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-indigo-500/30">
              <MessageCircle className="h-8 w-8 text-indigo-400" />
            </div>
          </div>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
            <span className="text-sm font-medium text-indigo-400">お問い合わせ</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            ご相談ください
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            アイデアを実現するためのお手伝いをさせていただきます。お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-700/50">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <Send className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">メッセージを送信</h3>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 sm:text-sm px-5 py-3.5 border transition-all duration-200 hover:border-gray-500"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 sm:text-sm px-5 py-3.5 border transition-all duration-200 hover:border-gray-500"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2.5">
                  メッセージ <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-xl border-gray-600 bg-gray-700/50 text-white placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 sm:text-sm px-5 py-3.5 border transition-all duration-200 resize-none hover:border-gray-500"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl flex items-start space-x-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-900/30 text-green-300 border border-green-700/50'
                      : 'bg-red-900/30 text-red-300 border border-red-700/50'
                  }`}
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full mt-0.5 ${
                    submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      送信中...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      送信する
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-700/50">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                <MapPin className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">連絡先情報</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="group flex items-start space-x-4 p-5 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform duration-200">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1.5 text-lg">住所</h3>
                  <p className="text-gray-300 leading-relaxed">3-3 Kioichō, Chiyoda City, Tokyo</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-5 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform duration-200">
                  <Phone className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1.5 text-lg">電話番号</h3>
                  <a href="tel:+81559415821" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                    +81 55-941-5821
                  </a>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-5 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform duration-200">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1.5 text-lg">メール</h3>
                  <a href="mailto:passionmuse16@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 break-all">
                    contact@uptechinc.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <iframe
                title="map"
                className="w-full h-80"
                src="https://www.google.com/maps/embed/v1/place?q=3-3%20Kioich%C5%8D&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}