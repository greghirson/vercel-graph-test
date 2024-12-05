
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-05 04:00:00", "b": 540.4}, {"a": "2024-12-05 04:05:00", "b": 552.4}, {"a": "2024-12-05 04:10:00", "b": 552.8}, {"a": "2024-12-05 04:15:00", "b": 575.0}, {"a": "2024-12-05 04:20:00", "b": 612.5}, {"a": "2024-12-05 04:25:00", "b": 621.6}, {"a": "2024-12-05 04:30:00", "b": 597.25}, {"a": "2024-12-05 04:35:00", "b": 591.2}, {"a": "2024-12-05 04:40:00", "b": 577.6}, {"a": "2024-12-05 04:45:00", "b": 574.0}, {"a": "2024-12-05 04:50:00", "b": 581.3333333333334}, {"a": "2024-12-05 04:55:00", "b": 578.2}, {"a": "2024-12-05 05:00:00", "b": 561.25}, {"a": "2024-12-05 05:05:00", "b": 551.5}, {"a": "2024-12-05 05:10:00", "b": 571.8}, {"a": "2024-12-05 05:15:00", "b": 549.8}, {"a": "2024-12-05 05:20:00", "b": 541.5}, {"a": "2024-12-05 05:25:00", "b": 547.0}, {"a": "2024-12-05 05:30:00", "b": 543.75}, {"a": "2024-12-05 05:35:00", "b": 536.0}, {"a": "2024-12-05 05:40:00", "b": 544.4}, {"a": "2024-12-05 05:45:00", "b": 543.6}, {"a": "2024-12-05 05:50:00", "b": 548.0}, {"a": "2024-12-05 05:55:00", "b": 545.75}, {"a": "2024-12-05 06:00:00", "b": 541.0}, {"a": "2024-12-05 06:05:00", "b": 545.2}, {"a": "2024-12-05 06:10:00", "b": 538.2}, {"a": "2024-12-05 06:15:00", "b": 543.75}, {"a": "2024-12-05 06:20:00", "b": 539.0}, {"a": "2024-12-05 06:25:00", "b": 539.4}, {"a": "2024-12-05 06:30:00", "b": 534.8}, {"a": "2024-12-05 06:35:00", "b": 529.6}, {"a": "2024-12-05 06:40:00", "b": 527.5}, {"a": "2024-12-05 06:45:00", "b": 524.2}, {"a": "2024-12-05 06:50:00", "b": 530.75}, {"a": "2024-12-05 06:55:00", "b": 539.25}, {"a": "2024-12-05 07:00:00", "b": 543.25}, {"a": "2024-12-05 07:05:00", "b": 543.2}, {"a": "2024-12-05 07:10:00", "b": 542.6}, {"a": "2024-12-05 07:15:00", "b": 534.25}, {"a": "2024-12-05 07:20:00", "b": 544.0}, {"a": "2024-12-05 07:25:00", "b": 541.0}, {"a": "2024-12-05 07:30:00", "b": 527.8}, {"a": "2024-12-05 07:35:00", "b": 513.0}, {"a": "2024-12-05 07:40:00", "b": 512.75}, {"a": "2024-12-05 07:45:00", "b": 519.6}, {"a": "2024-12-05 07:50:00", "b": 558.0}, {"a": "2024-12-05 07:55:00", "b": 575.4}, {"a": "2024-12-05 08:00:00", "b": 620.6}, {"a": "2024-12-05 08:05:00", "b": 664.6}, {"a": "2024-12-05 08:10:00", "b": 663.0}, {"a": "2024-12-05 08:15:00", "b": 648.0}, {"a": "2024-12-05 08:20:00", "b": 631.2}, {"a": "2024-12-05 08:25:00", "b": 620.6666666666666}, {"a": "2024-12-05 08:30:00", "b": 640.8}, {"a": "2024-12-05 08:35:00", "b": 647.6666666666666}, {"a": "2024-12-05 08:40:00", "b": 636.8}, {"a": "2024-12-05 08:45:00", "b": 630.5}, {"a": "2024-12-05 08:50:00", "b": 648.2}, {"a": "2024-12-05 08:55:00", "b": 658.4}, {"a": "2024-12-05 09:00:00", "b": 663.75}, {"a": "2024-12-05 09:05:00", "b": 641.0}, {"a": "2024-12-05 09:10:00", "b": 655.4}, {"a": "2024-12-05 09:15:00", "b": 636.0}, {"a": "2024-12-05 09:20:00", "b": 641.75}, {"a": "2024-12-05 09:25:00", "b": 614.6}, {"a": "2024-12-05 09:30:00", "b": 587.75}, {"a": "2024-12-05 09:35:00", "b": 587.8}, {"a": "2024-12-05 09:40:00", "b": 568.25}, {"a": "2024-12-05 09:45:00", "b": 579.4}, {"a": "2024-12-05 09:50:00", "b": 612.8}, {"a": "2024-12-05 09:55:00", "b": 622.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    