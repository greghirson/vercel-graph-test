
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-16 04:00:00", "b": 578.8}, {"a": "2024-12-16 04:05:00", "b": 583.4}, {"a": "2024-12-16 04:10:00", "b": 580.5}, {"a": "2024-12-16 04:15:00", "b": 579.8}, {"a": "2024-12-16 04:20:00", "b": 573.3333333333334}, {"a": "2024-12-16 04:25:00", "b": 562.8}, {"a": "2024-12-16 04:30:00", "b": 568.75}, {"a": "2024-12-16 04:35:00", "b": 575.6}, {"a": "2024-12-16 04:40:00", "b": 573.0}, {"a": "2024-12-16 04:45:00", "b": 562.0}, {"a": "2024-12-16 04:50:00", "b": 559.6}, {"a": "2024-12-16 04:55:00", "b": 571.6}, {"a": "2024-12-16 05:00:00", "b": 564.4}, {"a": "2024-12-16 05:05:00", "b": 559.25}, {"a": "2024-12-16 05:10:00", "b": 558.2}, {"a": "2024-12-16 05:15:00", "b": 558.4}, {"a": "2024-12-16 05:20:00", "b": 562.6}, {"a": "2024-12-16 05:25:00", "b": 552.25}, {"a": "2024-12-16 05:30:00", "b": 554.4}, {"a": "2024-12-16 05:35:00", "b": 543.2}, {"a": "2024-12-16 05:40:00", "b": 538.25}, {"a": "2024-12-16 05:45:00", "b": 543.6}, {"a": "2024-12-16 05:50:00", "b": 540.8}, {"a": "2024-12-16 05:55:00", "b": 547.8}, {"a": "2024-12-16 06:00:00", "b": 539.6}, {"a": "2024-12-16 06:05:00", "b": 530.5}, {"a": "2024-12-16 06:10:00", "b": 538.6}, {"a": "2024-12-16 06:15:00", "b": 538.8}, {"a": "2024-12-16 06:20:00", "b": 536.0}, {"a": "2024-12-16 06:25:00", "b": 545.2}, {"a": "2024-12-16 06:30:00", "b": 539.0}, {"a": "2024-12-16 06:35:00", "b": 528.4}, {"a": "2024-12-16 06:40:00", "b": 534.2}, {"a": "2024-12-16 06:45:00", "b": 548.6}, {"a": "2024-12-16 06:50:00", "b": 532.5}, {"a": "2024-12-16 06:55:00", "b": 523.8}, {"a": "2024-12-16 07:00:00", "b": 537.0}, {"a": "2024-12-16 07:05:00", "b": 531.6}, {"a": "2024-12-16 07:10:00", "b": 524.0}, {"a": "2024-12-16 07:15:00", "b": 523.2}, {"a": "2024-12-16 07:20:00", "b": 551.75}, {"a": "2024-12-16 07:25:00", "b": 598.0}, {"a": "2024-12-16 07:30:00", "b": 641.0}, {"a": "2024-12-16 07:35:00", "b": 665.2}, {"a": "2024-12-16 07:40:00", "b": 723.2}, {"a": "2024-12-16 07:45:00", "b": 775.6}, {"a": "2024-12-16 07:50:00", "b": 796.75}, {"a": "2024-12-16 07:55:00", "b": 816.6}, {"a": "2024-12-16 08:00:00", "b": 845.6}, {"a": "2024-12-16 08:05:00", "b": 875.25}, {"a": "2024-12-16 08:10:00", "b": 912.2}, {"a": "2024-12-16 08:15:00", "b": 987.6}, {"a": "2024-12-16 08:20:00", "b": 1006.0}, {"a": "2024-12-16 08:25:00", "b": 1042.8}, {"a": "2024-12-16 08:30:00", "b": 1093.0}, {"a": "2024-12-16 08:35:00", "b": 1115.0}, {"a": "2024-12-16 08:40:00", "b": 1172.0}, {"a": "2024-12-16 08:45:00", "b": 1204.2}, {"a": "2024-12-16 08:50:00", "b": 1254.8}, {"a": "2024-12-16 08:55:00", "b": 1270.0}, {"a": "2024-12-16 09:00:00", "b": 1296.2}, {"a": "2024-12-16 09:05:00", "b": 1346.0}, {"a": "2024-12-16 09:10:00", "b": 1376.8}, {"a": "2024-12-16 09:15:00", "b": 1400.6}, {"a": "2024-12-16 09:20:00", "b": 1409.8}, {"a": "2024-12-16 09:25:00", "b": 1334.5}, {"a": "2024-12-16 09:30:00", "b": 1354.8}, {"a": "2024-12-16 09:35:00", "b": 1341.4}, {"a": "2024-12-16 09:40:00", "b": 1137.4}, {"a": "2024-12-16 09:45:00", "b": 988.6}, {"a": "2024-12-16 09:50:00", "b": 876.2}, {"a": "2024-12-16 09:55:00", "b": 803.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    