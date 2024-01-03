var Promise = require('promise');

function rowsToJson(data) {
  const defaultCol = 1;
  const rd = {}; // resultData
  if (!data || data.length < 1) return undefined;

  const header = data[0];
  if (header[0] && header[0].toUpperCase() != 'ID') return undefined;

  const colCount = header.length;

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    for (let j = 1; j < colCount; j++) {
      if (['ID', 'en', 'ko', 'ja', 'zh', 'service_id'].includes(data[0][j])) {
        const headerName = header[j].trim();
        const value = row[j];
        if (!rd[headerName]) rd[headerName] = {};
        if (!value || value.length < 1) {
          rd[headerName][row[0]] = row[defaultCol];
        } else {
          rd[headerName][row[0]] = value;
        }
      }
    }
  }
  return rd;
}

function colsToJson(data){
  const defaultCol = 1;
  const rd = {}; // resultData
  if (!data || data.length < 1) return undefined;
  const header = data[0];
  if (header[0] && header[0].toUpperCase() != 'ID') return undefined;

  const colCount = header.length;

  for (let i=1;i<data.length;i++) {
    const row = data[i];
    const headerName = row[0].trim();
    if (!rd[headerName]) rd[headerName] = {};
    for (let j=1;j<colCount;j++) {
      if (['id', 'en', 'ko', 'ja', 'zh', 'service_id'].includes(data[0][j])) {
        let lang = data[0][j];
        const value = row[j];
        if (!value || value.length < 1) {
          rd[headerName][row[j]] = row[defaultCol];
        } else {
          rd[headerName][lang] = value;
        }
      }
    }
  }
  rd['freetrial'] = {};
  rd['freetrial']['en'] = 'Start a free trial';
  rd['freetrial']['ja'] = 'Start a free trial';
  rd['freetrial']['ko'] = '무료로 시작하기';

  rd['ajaxAnalytics'] = {};
  rd['ajaxAnalytics']['en'] = 'AJAX Hitmap';
  rd['ajaxAnalytics']['ja'] = 'AJAX Hitmap';
  rd['ajaxAnalytics']['ko'] = 'AJAX 히트맵';

  rd['rumDashboard'] = {};
  rd['rumDashboard']['en'] = 'Browser Monitoring Dashboard';
  rd['rumDashboard']['ja'] = 'ブラウザ監視ダッシュボード';
  rd['rumDashboard']['ko'] = '브라우저 모니터링 대시보드';

  rd['reportStat'] = {
    "en": "Stat/Report",
    "ja": "統計/レポート",
    "ko": "통계/보고서"
  };

  rd["containerMap"] = {
    "en": "Container Map",
    "ja": "コンテナマップ",
    "ko": "컨테이너 맵"
  };

  rd["paymentHistory"] = {
    "en": "Billing History",
    "ja": "請求及び支払履歴",
    "ko": "청구 및 납부 내역"
  };

  rd["billingPreview"] = {
    "en": "Invoice Preview History",
    "ja": "請求書プレビュー",
    "ko": "청구서 미리보기"
  };

  rd["serverDetail"] = {
    "en": "Server Detail",
    "ja": "サーバー 詳細",
    "ko": "서버 상세"
  }

  rd["dbObjectInfo"] = {
    "en": "Top Object",
    "ja": "Topオブジェクト",
    "ko": "Top 오브젝트"
  }

  rd["clusterOverview"] = {
    "en": "Cluster Summary",
    "ja": "クラスターサマリー",
    "ko": "클러스터 요약"
  }

  rd["pendingPod"] = {
    "en": "Pending Pods",
    "ja": "Pending Pods",
    "ko": "Pending Pods"
  }

  rd["active_trx"] = {
    "en": "Active TX",
    "ja": "アクティブTX",
    "ko": "실행중 TX",
    "zh": "活动TX。",
    "service_id": "_00297"
  }

  rd["logTail"] = {
    "en": "Live Tail",
    "ja": "ログTail",
    "ko": "라이브 테일"
  }

  rd["podList"] = {
    "en": "Pod List",
    "ja": "Podリスト",
    "ko": "Pod 목록"
  }

  rd["containerizedAppList"] = {
    "en": "Application List",
    "ja": "アプリケーションリスト",
    "ko": "애플리케이션 목록"
  }

  rd["containerImages"] = {
    "en": "Container Images",
    "ja": "コンテナイメージ",
    "ko": "컨테이너 이미지"
  }

  rd["correlatedProjectManagement"] = {
    "en": "Correlated Project Management",
    "ja": "相関プロジェクト管理",
    "ko": "연계 프로젝트 관리"
  }

  rd["AA001"] = {
    "en": "Active Transaction Speed Chart",
    "ja": "アクティブTXスピードチャート",
    "ko": "액티브 트랜잭션 스피드"
  }

  rd["AA002"] = {
    "en": "Active Transaction",
    "ja": "アクティブTX",
    "ko": "액티브 트랜잭션"
  }

  rd["AA003"] = {
    "en": "Application summary",
    "ja": "アプリケーション要約",
    "ko": "애플리케이션 요약"
  }

  rd["AA004"] = {
    "en": "Active status",
    "ja": "アクティブ状態",
    "ko": "액티브 스테이터스"
  }

  rd["AA005"] = {
    "en": "Hitmap",
    "ja": "ヒットマップ",
    "ko": "히트맵"
  }

  rd["AA010"] = {
    "en": "Heap Memory",
    "ja": "ヒープメモリ",
    "ko": "힙 메모리"
  }

  rd["AA016"] = {
    "en": "Active Transaction Equalizer",
    "ja": "アクティブTXイコライザー",
    "ko": "액티브 트랜잭션 이퀄라이저"
  }

  rd["yaxis"] = {
    "en": "Y Auto",
    "ja": "Y軸自動",
    "ko": "Y축 자동"
  }

  rd["rumPageLoadHitmap"] = {
    "en": "Page Load Hitmap",
    "ja": "Page Load Hitmap",
    "ko": "페이지 로드 히트맵"
  }

  rd["agentInstall"] = {
    "en": "Agent Installation",
    "ja": "エージェントインストール",
    "ko": "에이전트 설치"
  }

  rd["kubeEventList"] = {
    "en": "Kubernetes Event",
    "ja": "クーバーネティスイベント",
    "ko": "쿠버네티스 이벤트"
  }

  rd["agentsConfiguration"] = {
    "en": "Instance Performance Analysis",
    "ja": "インスタンス性能",
    "ko": "인스턴스 성능 분석"
  }

  rd["whatapEventList"] = {
    "en": "WhaTap Event",
    "ja": "WhaTapイベント",
    "ko": "WhaTap 이벤트"
  }

  rd["objectManifest"] = {
    "en": "Object Manifest Information",
    "ja": "Object Manifest情報",
    "ko": "오브젝트 매니페스트"
  }

  return rd;
}

function jsonToKeyValue(json) {
  var str = '';
  for (var k in json) {
    var v = json[k];
    str += k + '=' + json[k] + '\n';
  }
  return str;
}

function keyValueToJson(contents) {
  if (!contents || contents.constructor != String) return;

  var lines = contents.split('\n');
  var rd = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if ((line[0] && line[0] == '#') || line.indexOf('=') < 1) continue;

    var kv = line.split('=');
    rd[kv[0].trim()] = kv[1].trim();
  }
  return rd;
}

function jsonToArray(json) {
  var arr = [];
  var localeKeys = ['ID'];
  var defaultLocale = json['en'];
  var values = [];

  var IDS = {};

  for (var k in json) {
    localeKeys.push(k);
    values.push(json[k]);
  }

  arr.push(localeKeys);

  for (var key = 1; key < localeKeys.length; key++) {
    var localeData = json[localeKeys[key]];
    for (var k in localeData) {
      IDS[k] = true;
    }
  }

  for (var id in IDS) {
    var ar = [id];
    for (var i = 1; i < localeKeys.length; i++) {
      var localeKey = localeKeys[i];
      var v = json[localeKey][id];
      if (!v) {
        ar.push(defaultLocale[id]);
      } else {
        ar.push(v);
      }
    }
    arr.push(ar);
  }
  return arr;
}

module.exports = {
  keyValueToJson: keyValueToJson,
  jsonToKeyValue: jsonToKeyValue,
  rowsToJson: rowsToJson,
  colsToJson: colsToJson,
  jsonToArray: jsonToArray,
};