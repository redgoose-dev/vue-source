/**
 * sleep
 * 실행을 딜레이시킵니다.
 *
 * @param {Number} delay
 * @return {Promise}
 */
export function sleep(delay=1000)
{
	return new Promise(function(resolve){
		setTimeout(resolve, delay);
	});
}


/**
 * initial custom event
 * 중복되는 `dom`에다 여러 이벤트를 넣고 싶을때(특히 window) 유니크한 이름으로 이벤트를 만들 수 있도록 커스텀 이벤트를 만들어서 사용할때 사용한다.
 * https://gist.github.com/yairEO/cb60592476a4204b27e83048949dbb45
 */
export function initCustomEvent()
{
  const events = {
    on(event, cb, opts)
    {
      if (!this.namespaces) this.namespaces = {};
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event)
    {
      if (!this.namespaces[event]) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  window.on = document.on = Element.prototype.on = events.on;
  window.off = document.off = Element.prototype.off = events.off;
}
