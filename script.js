
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-19 08:30:00", "b": 645.8}, {"a": "2024-10-19 08:35:00", "b": 664.2}, {"a": "2024-10-19 08:40:00", "b": 659.0}, {"a": "2024-10-19 08:45:00", "b": 646.0}, {"a": "2024-10-19 08:50:00", "b": 656.6}, {"a": "2024-10-19 08:55:00", "b": 663.2}, {"a": "2024-10-19 09:00:00", "b": 695.0}, {"a": "2024-10-19 09:05:00", "b": 701.6}, {"a": "2024-10-19 09:10:00", "b": 694.5}, {"a": "2024-10-19 09:15:00", "b": 688.8}, {"a": "2024-10-19 09:20:00", "b": 715.0}, {"a": "2024-10-19 09:25:00", "b": 724.4}, {"a": "2024-10-19 09:30:00", "b": 696.5}, {"a": "2024-10-19 09:35:00", "b": 705.8}, {"a": "2024-10-19 09:40:00", "b": 692.4}, {"a": "2024-10-19 09:45:00", "b": 671.6}, {"a": "2024-10-19 09:50:00", "b": 656.0}, {"a": "2024-10-19 09:55:00", "b": 616.0}, {"a": "2024-10-19 10:00:00", "b": 603.0}, {"a": "2024-10-19 10:05:00", "b": 594.4}, {"a": "2024-10-19 10:10:00", "b": 583.5}, {"a": "2024-10-19 10:15:00", "b": 601.6}, {"a": "2024-10-19 10:20:00", "b": 598.8}, {"a": "2024-10-19 10:25:00", "b": 591.75}, {"a": "2024-10-19 10:30:00", "b": 562.4}, {"a": "2024-10-19 10:35:00", "b": 562.5}, {"a": "2024-10-19 10:40:00", "b": 549.2}, {"a": "2024-10-19 10:45:00", "b": 517.0}, {"a": "2024-10-19 10:50:00", "b": 477.6}, {"a": "2024-10-19 10:55:00", "b": 480.8}, {"a": "2024-10-19 11:00:00", "b": 475.0}, {"a": "2024-10-19 11:05:00", "b": 463.2}, {"a": "2024-10-19 11:10:00", "b": 440.8}, {"a": "2024-10-19 11:15:00", "b": 466.5}, {"a": "2024-10-19 11:20:00", "b": 402.0}, {"a": "2024-10-19 11:25:00", "b": 578.4}, {"a": "2024-10-19 11:30:00", "b": 596.75}, {"a": "2024-10-19 11:35:00", "b": 595.0}, {"a": "2024-10-19 11:40:00", "b": 622.4}, {"a": "2024-10-19 11:45:00", "b": 636.5}, {"a": "2024-10-19 11:50:00", "b": 623.75}, {"a": "2024-10-19 11:55:00", "b": 604.6666666666666}, {"a": "2024-10-19 12:00:00", "b": 611.4}, {"a": "2024-10-19 12:05:00", "b": 673.0}, {"a": "2024-10-19 12:10:00", "b": 652.0}, {"a": "2024-10-19 12:15:00", "b": 680.8}, {"a": "2024-10-19 12:20:00", "b": 700.2}, {"a": "2024-10-19 12:25:00", "b": 702.8}, {"a": "2024-10-19 12:30:00", "b": 688.4}, {"a": "2024-10-19 12:35:00", "b": 677.25}, {"a": "2024-10-19 12:40:00", "b": 679.25}, {"a": "2024-10-19 12:45:00", "b": 679.6666666666666}, {"a": "2024-10-19 12:50:00", "b": 669.2}, {"a": "2024-10-19 12:55:00", "b": 674.2}, {"a": "2024-10-19 13:00:00", "b": 654.8}, {"a": "2024-10-19 13:05:00", "b": 655.6}, {"a": "2024-10-19 13:10:00", "b": 651.5}, {"a": "2024-10-19 13:15:00", "b": 646.4}, {"a": "2024-10-19 13:20:00", "b": 641.6666666666666}, {"a": "2024-10-19 13:25:00", "b": 638.0}, {"a": "2024-10-19 13:30:00", "b": 646.0}, {"a": "2024-10-19 13:35:00", "b": 621.4}, {"a": "2024-10-19 13:40:00", "b": 602.75}, {"a": "2024-10-19 13:45:00", "b": 615.75}, {"a": "2024-10-19 13:50:00", "b": 622.0}, {"a": "2024-10-19 13:55:00", "b": 628.6666666666666}, {"a": "2024-10-19 14:00:00", "b": 614.2}, {"a": "2024-10-19 14:05:00", "b": 595.6}, {"a": "2024-10-19 14:10:00", "b": 605.75}, {"a": "2024-10-19 14:15:00", "b": 601.6}, {"a": "2024-10-19 14:20:00", "b": 601.25}, {"a": "2024-10-19 14:25:00", "b": 591.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    