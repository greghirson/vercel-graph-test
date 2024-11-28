
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-28 00:00:00", "b": 566.0}, {"a": "2024-11-28 00:05:00", "b": 599.0}, {"a": "2024-11-28 00:10:00", "b": 759.8}, {"a": "2024-11-28 00:15:00", "b": 669.2}, {"a": "2024-11-28 00:20:00", "b": 736.2}, {"a": "2024-11-28 00:25:00", "b": 617.25}, {"a": "2024-11-28 00:30:00", "b": 673.2}, {"a": "2024-11-28 00:35:00", "b": 727.6}, {"a": "2024-11-28 00:40:00", "b": 671.8}, {"a": "2024-11-28 00:45:00", "b": 633.4}, {"a": "2024-11-28 00:50:00", "b": 616.0}, {"a": "2024-11-28 00:55:00", "b": 842.0}, {"a": "2024-11-28 01:00:00", "b": 837.6}, {"a": "2024-11-28 01:05:00", "b": 651.0}, {"a": "2024-11-28 01:10:00", "b": 698.4}, {"a": "2024-11-28 01:15:00", "b": 821.6}, {"a": "2024-11-28 01:20:00", "b": 661.6}, {"a": "2024-11-28 01:25:00", "b": 698.8}, {"a": "2024-11-28 01:30:00", "b": 766.6}, {"a": "2024-11-28 01:35:00", "b": 663.8}, {"a": "2024-11-28 01:40:00", "b": 613.4}, {"a": "2024-11-28 01:45:00", "b": 483.0}, {"a": "2024-11-28 01:50:00", "b": 556.0}, {"a": "2024-11-28 01:55:00", "b": 532.4}, {"a": "2024-11-28 02:00:00", "b": 574.6}, {"a": "2024-11-28 02:05:00", "b": 501.4}, {"a": "2024-11-28 02:10:00", "b": 508.0}, {"a": "2024-11-28 02:15:00", "b": 514.2}, {"a": "2024-11-28 02:20:00", "b": 496.2}, {"a": "2024-11-28 02:25:00", "b": 493.5}, {"a": "2024-11-28 02:30:00", "b": 474.5}, {"a": "2024-11-28 02:35:00", "b": 525.5}, {"a": "2024-11-28 02:40:00", "b": 486.8}, {"a": "2024-11-28 02:45:00", "b": 454.6}, {"a": "2024-11-28 02:50:00", "b": 517.0}, {"a": "2024-11-28 02:55:00", "b": 496.6}, {"a": "2024-11-28 03:00:00", "b": 476.8}, {"a": "2024-11-28 03:05:00", "b": 482.0}, {"a": "2024-11-28 03:10:00", "b": 488.6}, {"a": "2024-11-28 03:15:00", "b": 452.4}, {"a": "2024-11-28 03:20:00", "b": 450.8}, {"a": "2024-11-28 03:25:00", "b": 454.8}, {"a": "2024-11-28 03:30:00", "b": 469.2}, {"a": "2024-11-28 03:35:00", "b": 456.4}, {"a": "2024-11-28 03:40:00", "b": 468.4}, {"a": "2024-11-28 03:45:00", "b": 482.6}, {"a": "2024-11-28 03:50:00", "b": 482.6}, {"a": "2024-11-28 03:55:00", "b": 453.75}, {"a": "2024-11-28 04:00:00", "b": 454.2}, {"a": "2024-11-28 04:05:00", "b": 494.0}, {"a": "2024-11-28 04:10:00", "b": 475.8}, {"a": "2024-11-28 04:15:00", "b": 448.5}, {"a": "2024-11-28 04:20:00", "b": 443.6}, {"a": "2024-11-28 04:25:00", "b": 453.3333333333333}, {"a": "2024-11-28 04:30:00", "b": 435.0}, {"a": "2024-11-28 04:35:00", "b": 434.0}, {"a": "2024-11-28 04:40:00", "b": 449.5}, {"a": "2024-11-28 04:45:00", "b": 477.4}, {"a": "2024-11-28 04:50:00", "b": 485.0}, {"a": "2024-11-28 04:55:00", "b": 476.0}, {"a": "2024-11-28 05:00:00", "b": 477.0}, {"a": "2024-11-28 05:05:00", "b": 531.2}, {"a": "2024-11-28 05:10:00", "b": 481.2}, {"a": "2024-11-28 05:15:00", "b": 508.8}, {"a": "2024-11-28 05:20:00", "b": 504.6}, {"a": "2024-11-28 05:25:00", "b": 506.0}, {"a": "2024-11-28 05:30:00", "b": 509.4}, {"a": "2024-11-28 05:35:00", "b": 521.0}, {"a": "2024-11-28 05:40:00", "b": 486.2}, {"a": "2024-11-28 05:45:00", "b": 455.4}, {"a": "2024-11-28 05:50:00", "b": 478.2}, {"a": "2024-11-28 05:55:00", "b": 495.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    