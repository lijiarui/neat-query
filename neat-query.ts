export class NeatQuery {
	private static chinesePunction: string[] = ['！', '“', '”', '；', '《', '》', '。', '、', '，', '【', '】', '（', '）', '？', '：']
	private static englishPunction: string[] = ['!', '"', '"', ';', '<', '>', '.', ',', ',', '[', ']', '(', ')', '?', ':']

	public static replaceChinese(content: string) {
		this.chinesePunction.forEach(function (ele, index) {
			content = content.replace(ele, NeatQuery.englishPunction[index])
		})
		return content
	}
	
	public static replaceEnglish(content: string) {
		this.englishPunction.forEach(function (ele, index) {
			content = content.replace(ele, NeatQuery.chinesePunction[index])
		})
		return content
	}
	
	public static convert(content: string) {
		return this.replaceChinese(content.replace(' ', ','))
	}
}
