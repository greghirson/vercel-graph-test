
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-25 23:10:00", "b": 676.8}, {"a": "2024-10-25 23:15:00", "b": 702.2}, {"a": "2024-10-25 23:20:00", "b": 720.2}, {"a": "2024-10-25 23:25:00", "b": 710.4}, {"a": "2024-10-25 23:30:00", "b": 702.25}, {"a": "2024-10-25 23:35:00", "b": 688.2}, {"a": "2024-10-25 23:40:00", "b": 680.6}, {"a": "2024-10-25 23:45:00", "b": 678.6}, {"a": "2024-10-25 23:50:00", "b": 683.0}, {"a": "2024-10-25 23:55:00", "b": 671.0}, {"a": "2024-10-26 00:00:00", "b": 664.75}, {"a": "2024-10-26 00:05:00", "b": 651.5}, {"a": "2024-10-26 00:10:00", "b": 648.2}, {"a": "2024-10-26 00:15:00", "b": 654.0}, {"a": "2024-10-26 00:20:00", "b": 638.6}, {"a": "2024-10-26 00:25:00", "b": 615.2}, {"a": "2024-10-26 00:30:00", "b": 613.6}, {"a": "2024-10-26 00:35:00", "b": 603.6666666666666}, {"a": "2024-10-26 00:40:00", "b": 603.8}, {"a": "2024-10-26 00:45:00", "b": 603.0}, {"a": "2024-10-26 00:50:00", "b": 603.0}, {"a": "2024-10-26 00:55:00", "b": 594.0}, {"a": "2024-10-26 01:00:00", "b": 580.2}, {"a": "2024-10-26 01:05:00", "b": 592.0}, {"a": "2024-10-26 01:10:00", "b": 585.4}, {"a": "2024-10-26 01:15:00", "b": 582.6}, {"a": "2024-10-26 01:20:00", "b": 584.6}, {"a": "2024-10-26 01:25:00", "b": 584.0}, {"a": "2024-10-26 01:30:00", "b": 592.6}, {"a": "2024-10-26 01:35:00", "b": 587.8}, {"a": "2024-10-26 01:40:00", "b": 580.0}, {"a": "2024-10-26 01:45:00", "b": 576.5}, {"a": "2024-10-26 01:50:00", "b": 581.75}, {"a": "2024-10-26 01:55:00", "b": 578.25}, {"a": "2024-10-26 02:00:00", "b": 569.0}, {"a": "2024-10-26 02:05:00", "b": 559.0}, {"a": "2024-10-26 02:10:00", "b": 554.2}, {"a": "2024-10-26 02:15:00", "b": 572.5}, {"a": "2024-10-26 02:20:00", "b": 579.5}, {"a": "2024-10-26 02:25:00", "b": 571.0}, {"a": "2024-10-26 02:30:00", "b": 564.25}, {"a": "2024-10-26 02:35:00", "b": 557.5}, {"a": "2024-10-26 02:40:00", "b": 572.6}, {"a": "2024-10-26 02:45:00", "b": 568.6}, {"a": "2024-10-26 02:50:00", "b": 559.4}, {"a": "2024-10-26 02:55:00", "b": 557.2}, {"a": "2024-10-26 03:00:00", "b": 565.25}, {"a": "2024-10-26 03:05:00", "b": 564.0}, {"a": "2024-10-26 03:10:00", "b": 561.25}, {"a": "2024-10-26 03:15:00", "b": 557.0}, {"a": "2024-10-26 03:20:00", "b": 557.4}, {"a": "2024-10-26 03:25:00", "b": 559.75}, {"a": "2024-10-26 03:30:00", "b": 561.4}, {"a": "2024-10-26 03:35:00", "b": 558.0}, {"a": "2024-10-26 03:40:00", "b": 552.5}, {"a": "2024-10-26 03:45:00", "b": 558.0}, {"a": "2024-10-26 03:50:00", "b": 559.25}, {"a": "2024-10-26 03:55:00", "b": 562.75}, {"a": "2024-10-26 04:00:00", "b": 574.8}, {"a": "2024-10-26 04:05:00", "b": 570.75}, {"a": "2024-10-26 04:10:00", "b": 555.75}, {"a": "2024-10-26 04:15:00", "b": 563.4}, {"a": "2024-10-26 04:20:00", "b": 560.5}, {"a": "2024-10-26 04:25:00", "b": 553.4}, {"a": "2024-10-26 04:30:00", "b": 559.0}, {"a": "2024-10-26 04:35:00", "b": 563.8}, {"a": "2024-10-26 04:40:00", "b": 563.0}, {"a": "2024-10-26 04:45:00", "b": 565.6666666666666}, {"a": "2024-10-26 04:50:00", "b": 560.25}, {"a": "2024-10-26 04:55:00", "b": 549.6}, {"a": "2024-10-26 05:00:00", "b": 547.2}, {"a": "2024-10-26 05:05:00", "b": 556.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    