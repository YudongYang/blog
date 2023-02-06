import{_ as t,M as p,p as o,q as l,R as n,t as s,N as e,a1 as i}from"./framework-30b324a0.js";const c="/img/201802110947309388.png",d="/img/201802110949143807.png",r="/img/201802111033545129.png",u="/img/201802121236371374.png",k="/img/201802121237243520.png",v="/img/201802121243044973.png",m="/img/201802121245412057.png",b="/img/201802121254513646.png",g="/img/201802121543319883.png",_="/img/201802121624038035.png",w="/img/201802121637122209.png",y={},h=n("h1",{id:"postgresql-安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#postgresql-安装","aria-hidden":"true"},"#"),s(" PostgreSQL 安装")],-1),E=n("p",null,"PostgreSQL 是一款优秀的企业级数据库。",-1),L={href:"http://blog.csdn.net/ranran_5300/article/details/48129187",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,"在这里挑几个和 PostgreSQL 相关的重点说一下：",-1),N=n("p",null,"（1）免费",-1),f=n("p",null,"（2）面向对象的关系型数据库",-1),O=n("p",null,"（3）可靠",-1),x=n("p",null,"（4）支持全文搜索",-1),A=n("p",null,"（5）查询速度快",-1),S={href:"http://www.pengyuwei.net/PGDOC/944/index.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.postgresql.org/docs/9.4/datatype-json.html",target:"_blank",rel:"noopener noreferrer"},C=n("h2",{id:"一、-postgresql-下载并安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、-postgresql-下载并安装","aria-hidden":"true"},"#"),s(" 一、 PostgreSQL 下载并安装")],-1),R=n("h3",{id:"_1、-安装包安装方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、-安装包安装方式","aria-hidden":"true"},"#"),s(" 1、 安装包安装方式")],-1),I={href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://www.enterprisedb.com/downloads/postgres-postgresql-downloads",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,"我在下载时，由于系统版本关系，下载了 PostgreSQL 10",-1),P=n("p",null,"在安装过程中，记得记住输入的数据密码就好，一般本地都是默认的就行，下面是安装概要",-1),B=n("p",null,[n("img",{src:c,alt:"安装概要.png"})],-1),M=n("p",null,"安装完成之后呢，会提示安装一些插件，为了性能起见，暂时不装，用到了再装就好。",-1),D=n("p",null,[n("img",{src:d,alt:"Stack Builder.png"})],-1),$=n("h3",{id:"_2、-命令行安装方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2、-命令行安装方式","aria-hidden":"true"},"#"),s(" 2、 命令行安装方式")],-1),F={href:"http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html",target:"_blank",rel:"noopener noreferrer"},V=i('<h2 id="二、-测试一下" tabindex="-1"><a class="header-anchor" href="#二、-测试一下" aria-hidden="true">#</a> 二、 测试一下</h2><p>顺便一说，用命令行方式安装的兄弟应该知道了 psql 是一个用户一个数据库的配置的。 <img src="'+r+`" alt="psql.png"></p><h3 id="_1、并发写入-100-万行数据" tabindex="-1"><a class="header-anchor" href="#_1、并发写入-100-万行数据" aria-hidden="true">#</a> 1、并发写入 100 万行数据</h3><p>（1）准备 创建一个带索引和 text 字段的表 创建序列 创建存储过程</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- Table: public.passage</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">public</span><span class="token punctuation">.</span>passage
<span class="token punctuation">(</span>
    id <span class="token keyword">integer</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    index_code <span class="token keyword">integer</span><span class="token punctuation">,</span>
    title <span class="token keyword">character</span> <span class="token keyword">varying</span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span> <span class="token keyword">COLLATE</span> pg_catalog<span class="token punctuation">.</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
    content <span class="token keyword">text</span> <span class="token keyword">COLLATE</span> pg_catalog<span class="token punctuation">.</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
    <span class="token keyword">CONSTRAINT</span> passage_pkey <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
    OIDS <span class="token operator">=</span> <span class="token boolean">FALSE</span>
<span class="token punctuation">)</span>
<span class="token keyword">TABLESPACE</span> pg_default<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">public</span><span class="token punctuation">.</span>passage
    OWNER <span class="token keyword">to</span> postgres<span class="token punctuation">;</span>
<span class="token keyword">COMMENT</span> <span class="token keyword">ON</span> <span class="token keyword">TABLE</span> <span class="token keyword">public</span><span class="token punctuation">.</span>passage
    <span class="token operator">IS</span> <span class="token string">&#39;测试写入数据&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- Index: passage_index_code_index</span>

<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> passage_index_code_index
    <span class="token keyword">ON</span> <span class="token keyword">public</span><span class="token punctuation">.</span>passage <span class="token keyword">USING</span> <span class="token keyword">btree</span>
    <span class="token punctuation">(</span>index_code<span class="token punctuation">)</span>
    <span class="token keyword">TABLESPACE</span> pg_default<span class="token punctuation">;</span>


<span class="token comment">-- CREATE SEQUENCE</span>
<span class="token keyword">CREATE</span> SEQUENCE <span class="token keyword">public</span><span class="token punctuation">.</span>passage_id_seq
    INCREMENT <span class="token number">1</span>
    <span class="token keyword">START</span> <span class="token number">1</span>
    MINVALUE <span class="token number">0</span>
    MAXVALUE <span class="token number">2147483646</span>
    CACHE <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> SEQUENCE <span class="token keyword">public</span><span class="token punctuation">.</span>passage_id_seq
    OWNER <span class="token keyword">TO</span> postgres<span class="token punctuation">;</span>

<span class="token comment">-- FUNCTION: public.insert_passage_function()</span>

<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>insert_passage_function<span class="token punctuation">(</span>
	<span class="token punctuation">)</span>
    <span class="token keyword">RETURNS</span> void
    <span class="token keyword">LANGUAGE</span> <span class="token string">&#39;plpgsql&#39;</span>

    COST <span class="token number">100</span>
    VOLATILE 
<span class="token keyword">AS</span> $BODY$
<span class="token keyword">declare</span> passage_content <span class="token keyword">text</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> i <span class="token keyword">integer</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> passage_index_code <span class="token keyword">integer</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
	<span class="token keyword">for</span> i <span class="token operator">in</span> <span class="token number">1.</span><span class="token number">.1000000</span> <span class="token keyword">loop</span>
		passage_index_code <span class="token operator">=</span> random<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10000</span> <span class="token punctuation">;</span>
		<span class="token keyword">insert</span> <span class="token keyword">into</span> passage <span class="token keyword">values</span><span class="token punctuation">(</span>nextval<span class="token punctuation">(</span><span class="token string">&#39;passage_id_seq&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> passage_index_code<span class="token punctuation">,</span> <span class="token string">&#39;文章标题&#39;</span> <span class="token operator">||</span> passage_index_code<span class="token punctuation">,</span> <span class="token string">&#39;文章内容&#39;</span> <span class="token operator">||</span> passage_index_code <span class="token operator">||</span> <span class="token string">&#39;文章内容&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

$BODY$<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>insert_passage_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
    OWNER <span class="token keyword">TO</span> postgres<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）运行 使用三个窗口同时运行函数 insert_passage_function ，可以看到，三条 SQL 的执行时间均为 25s 左右</p><p><img src="`+u+'" alt="插入数据.png"></p><p><img src="'+k+`" alt="执行结果.png"></p><h3 id="_2、查询效率" tabindex="-1"><a class="header-anchor" href="#_2、查询效率" aria-hidden="true">#</a> 2、查询效率</h3><p>（1）索引字段查询效率 对索引字段执行 10000 次查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- FUNCTION: public.select_passage_function()</span>

<span class="token comment">-- DROP FUNCTION public.select_passage_function();</span>

<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>select_passage_function<span class="token punctuation">(</span>
	<span class="token punctuation">)</span>
    <span class="token keyword">RETURNS</span> void
    <span class="token keyword">LANGUAGE</span> <span class="token string">&#39;plpgsql&#39;</span>

    COST <span class="token number">100</span>
    VOLATILE 
<span class="token keyword">AS</span> $BODY$

<span class="token keyword">declare</span> i <span class="token keyword">integer</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">sql</span> <span class="token keyword">varchar</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
	<span class="token keyword">for</span> i <span class="token operator">in</span> <span class="token number">1.</span><span class="token number">.10000</span> <span class="token keyword">loop</span>
		<span class="token keyword">sql</span> :<span class="token operator">=</span> <span class="token string">&#39;select * from passage where index_code = &#39;</span> <span class="token operator">||</span> i<span class="token punctuation">;</span>
		<span class="token keyword">execute</span> <span class="token keyword">sql</span><span class="token punctuation">;</span>
	<span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

$BODY$<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>select_passage_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
    OWNER <span class="token keyword">TO</span> postgres<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+`" alt="索引字段查询速度.png"></p><p>（2）text 字段查询 对 text 字段进行 100 次 like %% 查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- FUNCTION: public.select_passage_like_function()</span>

<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>select_passage_like_function<span class="token punctuation">(</span>
	<span class="token punctuation">)</span>
    <span class="token keyword">RETURNS</span> void
    <span class="token keyword">LANGUAGE</span> <span class="token string">&#39;plpgsql&#39;</span>

    COST <span class="token number">100</span>
    VOLATILE 
<span class="token keyword">AS</span> $BODY$
<span class="token keyword">declare</span> i <span class="token keyword">integer</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">sql</span> <span class="token keyword">varchar</span><span class="token punctuation">;</span>
<span class="token keyword">begin</span>
	<span class="token keyword">for</span> i <span class="token operator">in</span> <span class="token number">1.</span><span class="token number">.10000</span> <span class="token keyword">loop</span>
		<span class="token keyword">sql</span> :<span class="token operator">=</span> <span class="token string">&#39;select * from passage where content like &#39;&#39;%&#39;</span> <span class="token operator">||</span> i <span class="token operator">||</span> <span class="token string">&#39;%&#39;&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">execute</span> <span class="token keyword">sql</span><span class="token punctuation">;</span>
	<span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

$BODY$<span class="token punctuation">;</span>

<span class="token keyword">ALTER</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>select_passage_like_function<span class="token punctuation">(</span><span class="token punctuation">)</span>
    OWNER <span class="token keyword">TO</span> postgres<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+'" alt="text 字段查询速度.png"></p><h3 id="_3、同等条件下-mysql-执行情况" tabindex="-1"><a class="header-anchor" href="#_3、同等条件下-mysql-执行情况" aria-hidden="true">#</a> 3、同等条件下 MySQL 执行情况</h3><p>（1）3 线程并发写 100 万条数据，23s 左右 <img src="'+b+'" alt="图片.png"></p><p><img src="'+g+'" alt="MySQL 写入速度.png"></p><p>（2）10000 次索引字段查询， 36s 左右</p><p><img src="'+_+'" alt="MySQL 索引字段查询速度.png"></p><p>（3）100 次 text 字段 like 查询，呃，怎么说呢，6 分半钟左右，这个我就只跑了一次。不过，看来，这个性能差距是比较大的。</p><p><img src="'+w+'" alt="MySQL text 字段查询速度.png"></p><h3 id="_4、总结对比" tabindex="-1"><a class="header-anchor" href="#_4、总结对比" aria-hidden="true">#</a> 4、总结对比</h3><p>以下测试尽量保证运行机器环境一样。</p><table><thead><tr><th>数据库</th><th>MySQL(InnoDB)</th><th>PostgreSQL</th></tr></thead><tbody><tr><td>并发写入 300 万数据</td><td>23s</td><td>25s</td></tr><tr><td>10000 次索引字段查询</td><td>36s</td><td>22s</td></tr><tr><td>100 次 text 字段查询</td><td>390s</td><td>33s-60s</td></tr></tbody></table>',25);function G(Y,W){const a=p("ExternalLinkIcon");return o(),l("div",null,[h,E,n("p",null,[s("在这里，是 Oracle、 SQL Server、 MySQL、 PostgreSQL 四款数据库的比较。"),n("a",L,[s("http://blog.csdn.net/ranran_5300/article/details/48129187"),e(a)])]),T,N,f,O,x,A,n("p",null,[s("（6）一个优秀的 PostgreSQL 中文文档 "),n("a",S,[s("PostgreSQL 9.4.4 文档"),e(a)])]),n("p",null,[s("PostgreSQL 关于 json jsonb 数据结构 官方文档页 "),n("a",q,[s("PostgreSQL 9.4.26 Documentation 8.14. JSON Types"),e(a)])]),C,R,n("p",null,[s("这里是 PostgreSQL 的官网： "),n("a",I,[s("https://www.postgresql.org/"),e(a)])]),n("p",null,[s("这里是下载地址： "),n("a",Q,[s("https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"),e(a)])]),U,P,B,M,D,$,n("p",null,[s("我们可能会更喜欢使用命令行方式安装软件，之前我在 ubuntu 上使用了下面所列方法，也成功安装了，而且，确实挺方便的。 "),n("a",F,[s("http://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html"),e(a)])]),V])}const H=t(y,[["render",G],["__file","安装测试.html.vue"]]);export{H as default};
