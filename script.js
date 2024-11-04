
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 23:40:00", "b": 673.0}, {"a": "2024-11-03 23:45:00", "b": 652.0}, {"a": "2024-11-03 23:50:00", "b": 639.6}, {"a": "2024-11-03 23:55:00", "b": 637.0}, {"a": "2024-11-04 00:00:00", "b": 646.8}, {"a": "2024-11-04 00:05:00", "b": 639.0}, {"a": "2024-11-04 00:10:00", "b": 619.6}, {"a": "2024-11-04 00:15:00", "b": 620.8}, {"a": "2024-11-04 00:20:00", "b": 618.8}, {"a": "2024-11-04 00:25:00", "b": 597.4}, {"a": "2024-11-04 00:30:00", "b": 604.0}, {"a": "2024-11-04 00:35:00", "b": 611.0}, {"a": "2024-11-04 00:40:00", "b": 600.6}, {"a": "2024-11-04 00:45:00", "b": 581.6}, {"a": "2024-11-04 00:50:00", "b": 580.0}, {"a": "2024-11-04 00:55:00", "b": 580.4}, {"a": "2024-11-04 01:00:00", "b": 581.0}, {"a": "2024-11-04 01:05:00", "b": 576.25}, {"a": "2024-11-04 01:10:00", "b": 555.8}, {"a": "2024-11-04 01:15:00", "b": 568.4}, {"a": "2024-11-04 01:20:00", "b": 560.4}, {"a": "2024-11-04 01:25:00", "b": 559.6}, {"a": "2024-11-04 01:30:00", "b": 547.6}, {"a": "2024-11-04 01:35:00", "b": 532.5}, {"a": "2024-11-04 01:40:00", "b": 537.6}, {"a": "2024-11-04 01:45:00", "b": 525.8}, {"a": "2024-11-04 01:50:00", "b": 525.4}, {"a": "2024-11-04 01:55:00", "b": 525.0}, {"a": "2024-11-04 02:00:00", "b": 492.0}, {"a": "2024-11-04 02:05:00", "b": 528.4}, {"a": "2024-11-04 02:10:00", "b": 509.2}, {"a": "2024-11-04 02:15:00", "b": 507.6}, {"a": "2024-11-04 02:20:00", "b": 505.6}, {"a": "2024-11-04 02:25:00", "b": 504.4}, {"a": "2024-11-04 02:30:00", "b": 493.8}, {"a": "2024-11-04 02:35:00", "b": 495.8}, {"a": "2024-11-04 02:40:00", "b": 501.0}, {"a": "2024-11-04 02:45:00", "b": 478.4}, {"a": "2024-11-04 02:50:00", "b": 478.0}, {"a": "2024-11-04 02:55:00", "b": 490.0}, {"a": "2024-11-04 03:00:00", "b": 493.6}, {"a": "2024-11-04 03:05:00", "b": 477.2}, {"a": "2024-11-04 03:10:00", "b": 466.5}, {"a": "2024-11-04 03:15:00", "b": 482.75}, {"a": "2024-11-04 03:20:00", "b": 488.5}, {"a": "2024-11-04 03:25:00", "b": 484.0}, {"a": "2024-11-04 03:30:00", "b": 462.0}, {"a": "2024-11-04 03:35:00", "b": 465.0}, {"a": "2024-11-04 03:40:00", "b": 485.25}, {"a": "2024-11-04 03:45:00", "b": 478.2}, {"a": "2024-11-04 03:50:00", "b": 440.0}, {"a": "2024-11-04 03:55:00", "b": 444.25}, {"a": "2024-11-04 04:00:00", "b": 464.2}, {"a": "2024-11-04 04:05:00", "b": 462.2}, {"a": "2024-11-04 04:10:00", "b": 449.5}, {"a": "2024-11-04 04:15:00", "b": 446.2}, {"a": "2024-11-04 04:20:00", "b": 464.6}, {"a": "2024-11-04 04:25:00", "b": 428.2}, {"a": "2024-11-04 04:30:00", "b": 427.6}, {"a": "2024-11-04 04:35:00", "b": 441.0}, {"a": "2024-11-04 04:40:00", "b": 453.2}, {"a": "2024-11-04 04:45:00", "b": 437.2}, {"a": "2024-11-04 04:50:00", "b": 424.2}, {"a": "2024-11-04 04:55:00", "b": 437.4}, {"a": "2024-11-04 05:00:00", "b": 453.5}, {"a": "2024-11-04 05:05:00", "b": 434.8}, {"a": "2024-11-04 05:10:00", "b": 431.4}, {"a": "2024-11-04 05:15:00", "b": 431.0}, {"a": "2024-11-04 05:20:00", "b": 417.4}, {"a": "2024-11-04 05:25:00", "b": 406.5}, {"a": "2024-11-04 05:30:00", "b": 406.5}, {"a": "2024-11-04 05:35:00", "b": 406.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    